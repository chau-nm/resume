import { FC } from "react";
import styles from "./section.module.scss";

type StepProps = {};

export const Step: FC = () => {
  return (
    <div className={styles["step-wrapper"]}>
      <div className={styles["step-left"]}>
        <div className={styles.dot}>
          <div className={styles.time}></div>
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles["step-right"]}></div>
    </div>
  );
};
