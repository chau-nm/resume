import { FC } from "react";
import styles from "./albumDetailPopup.module.scss";

type AlbumListItemProps = {
  src: string;
  alt: string;
  handleChoose: () => void;
};

export const AlbumListItem: FC<AlbumListItemProps> = ({
  src,
  alt,
  handleChoose,
}) => {
  return (
    <div className={styles["album-list-item"]} onClick={handleChoose}>
      <img src={src} alt={alt} />
    </div>
  );
};
