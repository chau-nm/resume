import { FC } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { ROOT } from "common/path";

export const Signature: FC = () => {
  return (
    <div className={styles.signature}>
      <Link to={ROOT}>ChauNM</Link>
    </div>
  );
};
