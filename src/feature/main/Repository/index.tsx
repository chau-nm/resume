import { FC } from "react";
import { SectionWrapper } from "../SectionWrapper";
import Slider from "component/Slider";
import RepositoryItems from "./Items";

const Repository: FC = () => {
  return (
    <SectionWrapper sectionId="repository" title="Repository">
      <Slider items={RepositoryItems} />
    </SectionWrapper>
  );
};

export default Repository;
