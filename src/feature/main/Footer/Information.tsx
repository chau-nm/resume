import { FC } from "react";
import styles from "./footer.module.scss";
import { HomeOutline, MailOutline, PhoneOutline } from "assets/icons";

export const Information: FC = () => (
  <>
    <div className={styles["title"]}>Information</div>
    <ul>
      <li>
        <PhoneOutline />
        0865703869
      </li>
    </ul>
    <ul>
      <li>
        <MailOutline />
        chaunm.146.2001@gmail.com
      </li>
    </ul>
    <ul>
      <li>
        <HomeOutline />
        Binh Dinh Province
      </li>
    </ul>
  </>
);
