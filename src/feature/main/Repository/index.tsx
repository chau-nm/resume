import { FC } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./project.module.scss";
import Slider from "component/Slider";
import ProjectItems from "./Items";

const Project: FC = () => {
  return (
    <SectionWrapper
      sectionId="repository"
      title="Repository"
      className={styles.project}
    >
      <Slider items={ProjectItems} />
    </SectionWrapper>
  );
};

export default Project;
