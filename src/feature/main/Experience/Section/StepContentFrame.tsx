import { FC } from "react";
import styles from "./section.module.scss";

type StepContentFrameProps = {
  projectName: string;
  summary: string;
  technicalLogoUrls: string[];
  description: string | React.ReactNode;
};

export const StepContentFrame: FC<StepContentFrameProps> = ({
  projectName,
  summary,
  technicalLogoUrls,
  description,
}) => (
  <div className={styles["step-content"]}>
    <div className={styles.field}>
      <label>
        <strong>Project name:</strong>
      </label>{" "}
      {projectName}
    </div>
    <div className={styles.field}>
      <label>
        <strong>Summary:</strong>
      </label>{" "}
      <i>{summary}</i>
    </div>
    <div className={styles.field}>
      <label>
        <strong>Technical:</strong>
      </label>
      <ul className={styles["technicals"]}>
        {technicalLogoUrls.map((logo, index) => (
          <li key={index} className={styles["technical-item"]}>
            <img src={logo} alt="" />
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.field}>{description}</div>
  </div>
);
