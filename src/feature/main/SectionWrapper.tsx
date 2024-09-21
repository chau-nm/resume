import { useGSAP } from "@gsap/react";
import { DoubleLeftOutline, DoubleRightOutline } from "assets/icons";
import classNames from "classnames";
import { timelineScroll } from "libs/gsap";
import { FC, useRef } from "react";

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
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;
      const titleElement = titleRef.current;
      const titleText = titleElement.querySelector(".title-text");
      const icons = titleElement.querySelectorAll("svg");
      const lines = titleElement.querySelectorAll(".line");
      const timeline = timelineScroll(titleElement);
      applyTitleTextTween(timeline, titleText);
      applyIconTween(timeline, icons);
      applyLineTween(timeline, lines);
    },
    { scope: titleRef }
  );

  const applyTitleTextTween = (
    timeline: GSAPTimeline,
    target: GSAPTweenTarget
  ) => {
    timeline.fromTo(
      target,
      {
        scale: 0,
        opacity: 0,
      },
      { scale: 1, opacity: 0.7 }
    );
  };

  const applyIconTween = (timeline: GSAPTimeline, target: GSAPTweenTarget) => {
    timeline.fromTo(
      target,
      {
        fill: "none",
      },
      {
        fill: "#000000",
        opacity: 0.2,
      }
    );
  };

  const applyLineTween = (timeline: GSAPTimeline, target: GSAPTweenTarget) => {
    timeline.fromTo(
      target,
      {
        flex: 0,
      },
      { flex: 1, duration: 1 }
    );
  };

  return (
    <div id={sectionId} className={classNames("section", className)}>
      <div ref={titleRef} className="title">
        <div className="line"></div>
        <DoubleRightOutline />
        <h3 className="title-text">{title}</h3>
        <DoubleLeftOutline />
        <div className="line"></div>
      </div>
      {children}
    </div>
  );
};
