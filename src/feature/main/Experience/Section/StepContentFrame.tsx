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
}) => {
  return (
    <div className={styles["step-content"]}>
      <div className={styles["project-name"]}>{projectName}</div>
      <div className={styles["summary"]}>{summary}</div>
      <div className={styles["technicals-wrapper"]}>
        <ul className={styles["technicals"]}>
          {technicalLogoUrls.map((logo) => (
            <li className={styles["technical-item"]}>
              <img src={logo} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["description"]}>{description}</div>
    </div>
  );
};
