import {FC} from "react";
import styles from "./footer.module.scss";
import {Link} from "react-scroll";
import {ABOUT, ALBUM, EXPERIENCE, HOME, REPOSITORY} from "../sections";

export const Navigation: FC = () => (
  <>
    <div className={styles["title"]}>Navigation</div>
    <ul>
      <li>
        <Link to={HOME} smooth duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to={ABOUT} smooth duration={500}>
          About
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
        <Link to={REPOSITORY} smooth duration={500}>
          Repository
        </Link>
      </li>
    </ul>
  </>
);
