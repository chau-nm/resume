import { FC } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./project.module.scss";

const Project: FC = () => {
  return (
    <SectionWrapper
      sectionId="project"
      title="PROJECT"
      className={styles.project}
    ></SectionWrapper>
  );
};

export default Project;
