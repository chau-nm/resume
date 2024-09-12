import {
  ALBUM,
  EXPERIENCE,
  PROJECT,
  HOME,
  SUMMARY,
} from "feature/main/sections";
import { FC } from "react";
import styles from "./header.module.scss";
import { Link } from "react-scroll";

export const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to={HOME} smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to={SUMMARY} smooth duration={500}>
            Summary
          </Link>
        </li>
        <li>
          <Link to={ALBUM} smooth duration={500}>
            Album
          </Link>
        </li>
        <li>
          <Link to={EXPERIENCE} smooth duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to={PROJECT} smooth duration={500}>
            Peronal project
          </Link>
        </li>
      </ul>
    </div>
  );
};
