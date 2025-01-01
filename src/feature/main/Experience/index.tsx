import {FC} from "react";
import {SectionWrapper} from "../SectionWrapper";
import Section from "./Section";
import {experienceData as data} from "./data";

const Experience: FC = () => (
  <SectionWrapper
    sectionId="experience"
    title="Experience"
  >
    {data.map((record, index) => (
      <Section key={index} title={record.title} stepData={record.stepData} />
    ))}
  </SectionWrapper>
);

export default Experience;
