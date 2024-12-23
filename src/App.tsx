import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.scss";
import Main from "./feature/main";
import PageNotFound from "./feature/404";
import CV from "./feature/cv";

const App: FC = () => {
	return (
		<Routes>
			<Route path="/:section?" element={<Main/>}/>
			<Route path="/cv" element={<CV/>}/>
			<Route path="*" element={<PageNotFound/>}/>
		</Routes>
	);
};

export default App;
