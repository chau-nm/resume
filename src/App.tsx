import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.scss";
import Main from "./feature/main";
import PageNotFound from "./feature/404";
import {
	ROOT,
	CV as CV_PATH
} from "./common/path";
import CV from "./feature/cv";

const App: FC = () => {
	return (
		<Routes>
			<Route path={`${ROOT}:section?`} element={<Main/>}/>
			<Route path={CV_PATH} element={<CV/>}/>
			<Route path="*" element={<PageNotFound/>}/>
		</Routes>
	);
};

export default App;
