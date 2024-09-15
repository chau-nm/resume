import { FC } from "react";
import styles from "./album.module.scss";

type AlbumItemProps = {
  src?: string;
  alt?: string;
  handleOpenAlbumDetail?: () => void;
};

export const AlbumItem: FC<AlbumItemProps> = ({
  src,
  alt,
  handleOpenAlbumDetail,
}) => (
  <div className={styles["album-item"]} onClick={handleOpenAlbumDetail}>
    <img src={src} alt={alt} />
  </div>
);
