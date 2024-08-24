import { FC, useEffect } from "react";
import * as path from "common/path";
import { useLocation } from "react-router-dom";
import PageNotFound from "../404";
import Home from "./Home";
import About from "./About";
import { scrollInView } from "common/util";

const Main: FC = () => {
  const location = useLocation();
  const availablePath = Object.values(path) as string[];

  useEffect(() => {
    const sectionPath = location.pathname.slice(1);
    scrollInView(sectionPath);
  }, []);

  if (!availablePath.includes(location.pathname)) {
    return <PageNotFound />;
  }

  return (
    <div className="main">
      <Home />
      <About />
    </div>
  );
};

export default Main;
