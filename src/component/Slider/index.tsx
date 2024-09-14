import { FC, useMemo, useState } from "react";
import styles from "./slider.module.scss";
import classNames from "classnames";
import { DoubleLeftOutline, DoubleRightOutline } from "assets/icons";

type SliderProps = {
  items: React.ReactNode[];
};

const Slider: FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className={styles["slider"]}>
      <div className={styles["slider-content"]}>
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
      <div className={styles["previous-button"]} onClick={previousHandle}>
        <DoubleLeftOutline />
      </div>
      <div className={styles["next-button"]} onClick={nextHandle}>
        <DoubleRightOutline />
      </div>
      <div className={styles["indicator"]}>
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
