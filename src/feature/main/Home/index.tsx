import { CaretDownOutLine } from "assets/icons";
import IllustrationCoder from "assets/images/illustration_coder.png";
import NextSectionButton from "component/NextSectionButton";
import { FC } from "react";
import { Link } from "react-scroll";
import { SUMMARY } from "../sections";
import { ContactLinnk } from "./ContactLink";
import styles from "./home.module.scss";

const Home: FC = () => (
  <div id="home" className={styles.home}>
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.greeting}>
          <span>👋 I'm N.M.Chau</span>
        </div>
        <div className={styles.position}>
          <span>👉 Software Engineer 👈</span>
        </div>
        <ContactLinnk />
        <div className={styles["explore-button"]}>
          <Link to={SUMMARY} smooth duration={500}>
            <CaretDownOutLine />
            Explore Now
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <img src={IllustrationCoder} alt="" />
      </div>
    </div>
    <NextSectionButton title="SUMMARY" path={"summary"} />
  </div>
);

export default Home;
