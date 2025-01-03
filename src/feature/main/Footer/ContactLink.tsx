import { FC } from "react";
import styles from "./footer.module.scss";
import {FacebookOutLine, GithubOutLine, LinkedInOutline, ZaloOutline} from "assets/icons";

export const ContactLink: FC = () => (
  <div className={styles["contact-link"]}>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/light.146.2001/"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <FacebookOutLine />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/chau-nm"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          <GithubOutLine />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nguyen-minh-chau-304a2b2b8/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <LinkedInOutline />
        </a>
      </li>
      <li>
        <a
          href="https://zalo.me/0865703869"
          target="_blank"
          rel="noreferrer"
          className="zalo"
        >
          <ZaloOutline />
        </a>
      </li>
    </ul>
  </div>
);
