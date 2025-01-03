import {FC, useContext, useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {CV as CV_PATH, ROOT} from "./common/path";
import {ThemeContext} from "./theme/ThemeContext";
import {ThemeEnum} from "./theme/themeEnum";
import classNames from "classnames";
import "./App.scss";

import Main from "./feature/main";
import PageNotFound from "./feature/404";
import CV from "./feature/cv";
import {ToastContainer} from "react-toastify";

const App: FC = () => {
	
	const {theme} = useContext(ThemeContext);
	
	const themeClassName = useMemo(() => {
		switch (theme) {
			case ThemeEnum.DARK:
				return "theme-dark";
			case ThemeEnum.LIGHT:
				return "theme-light";
			default:
				return "theme-dark";
		}
	}, [theme]);
	
	return (
		<div className={classNames("app", themeClassName )}>
			<Routes>
				<Route path={`${ROOT}:section?`} element={<Main />} />
				<Route path={CV_PATH} element={<CV />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<ToastContainer />
		</div>
	);
};

export default App;
