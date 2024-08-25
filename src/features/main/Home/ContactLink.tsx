import { FC } from "react";
import styles from "./home.module.scss";
import { FacebookOutLine, GithubOutLine, LinkedInOutline } from "assets/icons";

export const ContactLinnk: FC = () => {
  return (
    <div className={styles["contact-link"]}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/light.146.2001/"
            target="_blank"
            rel="noreferrer"
            className={styles.facebook}
          >
            <FacebookOutLine />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/chau-nm"
            target="_blank"
            rel="noreferrer"
            className={styles.github}
          >
            <GithubOutLine />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nguyen-minh-chau-304a2b2b8/"
            target="_blank"
            rel="noreferrer"
            className={styles.linkedin}
          >
            <LinkedInOutline />
          </a>
        </li>
      </ul>
    </div>
  );
};
