import * as path from "common/path";
import { isInView, scrollInView } from "common/util";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PageNotFound from "../404";
import Album from "./Album";
import Header from "./Header";
import Home from "./Home";
import Summary from "./Summary";
import ScrollTopButton from "component/ScrollTopButton";
import Experience from "./Experience";
import "./main.scss";
import Technical from "./Technical";

const Main: FC = () => {
  const { section } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const availablePath = Object.values(path) as string[];
  const [isVisibleScollTop, setIsVisibleScrollTop] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window.scrollY > 100) {
      if (!isVisibleScollTop) setIsVisibleScrollTop(true);
    } else {
      if (isVisibleScollTop) setIsVisibleScrollTop(false);
    }
  });

  useEffect(() => {
    let sectionPath = section;
    if (!sectionPath) sectionPath = "home";
    const element = document.getElementById(sectionPath);
    if (isInView(element)) {
      return;
    }
    scrollInView(sectionPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      availablePath.forEach((path) => {
        const sectionPath = path.slice(1);
        const element = document.getElementById(sectionPath);
        if (isInView(element) && section !== path) {
          navigate(path, { replace: true });
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
      <Technical />
      <Experience />
      {isVisibleScollTop && <ScrollTopButton />}
    </div>
  );
};

export default Main;
