import * as mainSectionPath from "common/mainSectionPath";
import { isInView, scrollInView } from "common/util";
import ScrollTopButton from "component/ScrollTopButton";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PageNotFound from "../404";
import Album from "./Album";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./main.scss";
import Repository from "./Repository";
import Summary from "./Summary";
// import Technical from "./Technical";
import Skill from "./Skill";
import {Contact} from "./Contact";

const Main: FC = () => {
  const { section } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const availablePath = Object.values(mainSectionPath) as string[];
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
        if (sectionPath) {
          const element = document.getElementById(sectionPath);
          if (isInView(element) && section !== path) {
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
      {/* <Technical /> */}
      <Skill />
      <Experience />
      <Repository />
      <Contact />
      
      <Footer />
      {/* <SettingFAB /> */}
      {isVisibleScollTop && <ScrollTopButton />}
    </div>
  );
};

export default Main;
