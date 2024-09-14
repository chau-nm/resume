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
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};
