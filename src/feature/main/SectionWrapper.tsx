import { DoubleLeftOutline, DoubleRightOutline } from "assets/icons";
import classNames from "classnames";
import { FC } from "react";

type SectionWrapperProps = {
  sectionId: string;
  className?: string;
  title: string;
  children?: React.ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  sectionId,
  className,
  title,
  children,
}) => {
  return (
    <div id={sectionId} className={classNames("section", className)}>
      <div className="title">
        <div className="line"></div>
        <DoubleRightOutline />
        <h3>{title}</h3>
        <DoubleLeftOutline />
        <div className="line"></div>
      </div>
      {children}
    </div>
  );
};
