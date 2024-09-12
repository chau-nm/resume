import { FC } from "react";
import styles from "./nextSectionButton.module.scss";
import { CaretDownOutLine } from "assets/icons";
import { scrollInView } from "common/util";

type NextSectionButtonProps = {
  title?: string;
  path?: string;
};

const NextSectionButton: FC<NextSectionButtonProps> = ({ title, path }) => {
  const handleGoToPath = () => {
    if (!path) return;
    scrollInView(path);
  };

  return (
    <div
      className={styles["next-section-button"]}
      style={{
        cursor: path ? "pointer" : "default",
      }}
      onClick={handleGoToPath}
    >
      {title && (
        <div className={styles.title}>
          <span>{title}</span>
        </div>
      )}
      <CaretDownOutLine />
    </div>
  );
};

export default NextSectionButton;
