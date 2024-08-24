import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./features/main";
import PageNotFound from "./features/404";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/:section?" element={<Main />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
