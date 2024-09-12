import { FC } from "react";
import styles from "./baseModel.module.scss";
import { XMarkOutline } from "assets/icons";

type HeaderProps = {
  title: React.ReactNode;
  handleClose: () => void;
};

export const Header: FC<HeaderProps> = ({ title, handleClose }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div className={styles.closeButton} onClick={handleClose}>
        <XMarkOutline />
      </div>
    </div>
  );
};
