import { FC } from "react";
import styles from "./home.module.scss";
import { ContactLinnk } from "./ContactLink";
import NextSectionButton from "component/NextSectionButton";

const Home: FC = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.wrapper}>
        <div className={styles.fname}>
          <span>NGUYEN MINH CHAU</span>
        </div>
        <div className={styles.position}>
          <span>Software Engineer</span>
        </div>
        <ContactLinnk />
        <NextSectionButton title="SUMMARY" path={"summary"} />
      </div>
    </div>
  );
};

export default Home;
