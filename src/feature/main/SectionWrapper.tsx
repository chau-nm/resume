import { FC, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { DoubleLeftOutline, DoubleRightOutline } from "assets/icons";
import classNames from "classnames";
import gsap from "gsap";

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

  useGSAP(() => {
    if (!titleRef.current) return;
    const titleElement = titleRef.current;
    const titleText = titleElement.querySelector(".title-text");
    const icons = titleElement.querySelectorAll("svg");
    const lines = titleElement.querySelectorAll(".line");
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: titleElement,
        start: "top 80%",
        end: "top: 20%",
        toggleActions: "play none none reverse",
      },
    });
    applyTitleTextTween(timeLine, titleText);
    applyIconTween(timeLine, icons);
    applyLineTween(timeLine, lines);
  });

  const applyTitleTextTween = (
    timeLine: GSAPTimeline,
    target: GSAPTweenTarget
  ) => {
    timeLine.fromTo(
      target,
      {
        scale: 0,
        opacity: 0,
      },
      { scale: 1, opacity: 0.7 }
    );
  };

  const applyIconTween = (timeLine: GSAPTimeline, target: GSAPTweenTarget) => {
    timeLine.fromTo(
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

  const applyLineTween = (timeLine: GSAPTimeline, target: GSAPTweenTarget) => {
    timeLine.fromTo(
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
