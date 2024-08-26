import { FC, useEffect, useState } from "react";
import * as path from "common/path";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import PageNotFound from "../404";
import Home from "./Home";
import Summary from "./Summary";
import { scrollInView } from "common/util";
import Header from "./Header";
import Album from "./Album";

const Main: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const availablePath = Object.values(path) as string[];

  useEffect(() => {
    let sectionPath = location.pathname.slice(1);
    if (!sectionPath) sectionPath = "home";
    scrollInView(sectionPath);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      availablePath.forEach((path) => {
        const sectionPath = path.slice(1);
        const element = document.getElementById(sectionPath);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight &&
            location.pathname !== path
          ) {
            navigate(path, { replace: true });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [availablePath, location.pathname, navigate]);

  if (!availablePath.includes(location.pathname)) {
    return <PageNotFound />;
  }

  return (
    <div className="main">
      <Header />
      <Home />
      <Summary />
      <Album />
    </div>
  );
};

export default Main;
