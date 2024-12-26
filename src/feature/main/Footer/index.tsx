import { FC } from "react";
import { ContactLink } from "./ContactLink";
import styles from "./footer.module.scss";
import { Information } from "./Information";
import { Navigation } from "./Navigation";
import { Signature } from "./Signature";

const Footer: FC = () => (
  <div className={styles["footer"]}>
    <div className={styles["content"]}>
      <div className={styles["left"]}>
        <Signature />
        <span>Software Developer</span>
      </div>
      <div className={styles["middle"]}>
        <Navigation />
      </div>
      <div className={styles["right"]}>
        <Information />
      </div>
    </div>
    <div className={styles["greeting"]}>
      <div className={styles["greeting-content"]}>
        <span>I’m Chau, a software developer.</span>
        <br />
        <span>I’m very pleased to collaborate with you.</span>
      </div>
      <ContactLink />
    </div>
  </div>
);

export default Footer;
