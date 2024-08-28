import { FC } from "react";
import { AlbumType } from "../type";
import styles from "./albumDetailPopup.module.scss";

type AlbumDetailProps = {
  album: AlbumType;
};

export const AlbumDetail: FC<AlbumDetailProps> = ({ album }) => {
  return (
    <div className={styles["album-detail"]}>
      <img src={album.src} alt={album.title} />
    </div>
  );
};
