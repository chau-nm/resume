import { FC, useMemo, useState } from "react";
import styles from "./slider.module.scss";
import classNames from "classnames";
import { DoubleLeftOutline, DoubleRightOutline } from "assets/icons";
import { useGSAP } from "@gsap/react";
import { useMultipleRef } from "hook";
import { timelineScroll } from "libs/gsap";

type SliderProps = {
  items: React.ReactNode[];
};

enum refNames {
  slider = "slider",
  content = "content",
  prevButton = "pre-btn",
  nextButton = "next-btn",
  indicator = "indicator",
}

const Slider: FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { getRef, setRef } = useMultipleRef<HTMLDivElement | null>();

  useGSAP(() => {
    const timeline = timelineScroll(getRef(refNames.slider));
    applyContentTween(timeline);
    applyPreButton(timeline);
    applyNextButton(timeline);
    applyIndicatorButton(timeline);
  });

  const applyContentTween = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.content),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }
    );
  };

  const applyPreButton = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.prevButton),
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0 }
    );
  };

  const applyNextButton = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.nextButton),
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0 }
    );
  };

  const applyIndicatorButton = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.indicator),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0 }
    );
  };

  const previousIndex = useMemo(
    () => (currentIndex <= 0 ? items.length - 1 : currentIndex - 1),
    [currentIndex, items.length]
  );
  const nextIndex = useMemo(
    () => (currentIndex >= items.length - 1 ? 0 : currentIndex + 1),
    [currentIndex, items.length]
  );

  const previousHandle = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex <= 0 ? items.length - 1 : currentIndex - 1
    );
  };

  const nextHandle = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex >= items.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div
      ref={(element) => setRef(refNames.slider, element)}
      className={styles["slider"]}
    >
      <div
        ref={(element) => setRef(refNames.content, element)}
        className={styles["slider-content"]}
      >
        {items.map((items, index) => {
          const className = classNames(styles["slider-item-wrapper"], {
            [styles["item-previous"]]: previousIndex === index,
            [styles["item-current"]]: currentIndex === index,
            [styles["item-next"]]: nextIndex === index,
          });
          return (
            <div
              key={index}
              className={className}
              onClick={() => setCurrentIndex(index)}
            >
              {items}
            </div>
          );
        })}
      </div>
      <div
        ref={(element) => setRef(refNames.prevButton, element)}
        className={styles["previous-button"]}
        onClick={previousHandle}
      >
        <DoubleLeftOutline />
      </div>
      <div
        ref={(element) => setRef(refNames.nextButton, element)}
        className={styles["next-button"]}
        onClick={nextHandle}
      >
        <DoubleRightOutline />
      </div>
      <div
        ref={(element) => setRef(refNames.indicator, element)}
        className={styles["indicator"]}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className={classNames(styles["dot"], {
              [styles["dot-active"]]: currentIndex === index,
            })}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
