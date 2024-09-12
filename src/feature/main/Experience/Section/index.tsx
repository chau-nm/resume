import React, { FC } from "react";
import { ExperienceSectionStepType } from "../type";
import styles from "./section.module.scss";
import { Step } from "./Step";

type SectionProps = {
  title: string | React.ReactNode;
  stepData: ExperienceSectionStepType[];
};

const Section: FC<SectionProps> = ({ title, stepData }) => {
  return (
    <div className={styles.section}>
      <div className={styles["section-title"]}>{title}</div>
      <div className={styles["section-content"]}>
        {stepData.map((data, index) => (
          <Step key={index} dotTitle={data.dotTitle}>
            {data.content}
          </Step>
        ))}
      </div>
    </div>
  );
};

export default Section;
