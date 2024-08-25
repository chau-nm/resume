import { ALBUM, EXPERIENCE, PROJECT, ROOT, SUMMARY } from "common/path";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to={ROOT}>Home</Link>
        </li>
        <li>
          <Link to={SUMMARY}>Summary</Link>
        </li>
        <li>
          <Link to={ALBUM}>Album</Link>
        </li>
        <li>
          <Link to={EXPERIENCE}>Experience</Link>
        </li>
        <li>
          <Link to={PROJECT}>Peronal project</Link>
        </li>
      </ul>
    </div>
  );
};
