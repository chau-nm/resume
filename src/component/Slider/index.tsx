import { FC } from "react";
import styles from "./slider.module.scss";

type SliderProps = {
  items: React.ReactNode[];
};

const Slider: FC<SliderProps> = ({ items }) => {
  return (
    <div className={styles["slider"]}>
      <div className={styles["slider-content"]}>{items}</div>
      <div className={styles["previous-button"]}></div>
      <div className={styles["next-button"]}></div>
      <div className={styles["indicator"]}></div>
    </div>
  );
};

export default Slider;
