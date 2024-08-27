import * as path from "common/path";
import { scrollInView } from "common/util";
import { FC, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PageNotFound from "../404";
import Album from "./Album";
import Header from "./Header";
import Home from "./Home";
import Summary from "./Summary";

const Main: FC = () => {
  const { section } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const availablePath = Object.values(path) as string[];

  useEffect(() => {
    let sectionPath = section;
    if (!sectionPath) sectionPath = "home";
    scrollInView(sectionPath);
  }, [section]);

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
            section !== path
          ) {
            navigate(path, { replace: true });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [availablePath, section, navigate]);

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
