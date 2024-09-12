import { FC } from "react";
import Section from "./Section";
import { experienceData as data } from "./data";
import styles from "./experience.module.scss";
import classNames from "classnames";

const Experience: FC = () => {
  return (
    <div id="experience" className={classNames("section", styles.experience)}>
      <div className={styles.title}>
        <h3>Experience</h3>
      </div>
      {data.map((record, index) => (
        <Section key={index} title={record.title} stepData={record.stepData} />
      ))}
    </div>
  );
};

export default Experience;
