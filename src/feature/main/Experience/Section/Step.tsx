import { FC } from "react";
import styles from "./section.module.scss";

type StepProps = {
  dotTitle?: string;
  children?: React.ReactNode;
};

export const Step: FC<StepProps> = ({ dotTitle, children }) => (
  <div className={styles["step-wrapper"]}>
    <div className={styles["step-left"]}>
      <div className={styles.dot}>
        {dotTitle && <div className={styles["dot-title"]}>{dotTitle}</div>}
      </div>
      <div className={styles.line}></div>
    </div>
    <div className={styles["step-right"]}>{children}</div>
  </div>
);
