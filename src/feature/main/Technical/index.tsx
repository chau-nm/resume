import { FC } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./technical.module.scss";
import { technicalData } from "./data";
import { TechnicalRow } from "./TechnicalRow";

const Technical: FC = () => {
  return (
    <SectionWrapper
      sectionId="technical"
      title="TECHNICAL"
      className={styles.technical}
    >
      {technicalData.map((technicalRow) => {
        return <TechnicalRow technicalDataSource={technicalRow} />;
      })}
    </SectionWrapper>
  );
};

export default Technical;
