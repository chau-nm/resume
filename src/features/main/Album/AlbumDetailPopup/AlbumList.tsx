import { FC } from "react";
import { AlbumType } from "../type";
import { AlbumItem } from "../AlbumItem";
import styles from "./albumDetailPopup.module.scss";

type AlbumListProps = {
  albumData: AlbumType[];
  setImageIndex: (index: number) => void;
};

export const AlbumList: FC<AlbumListProps> = ({ albumData, setImageIndex }) => {
  return (
    <div className={styles["album-list"]}>
      {albumData.map((album, index) => (
        <AlbumItem
          src={album.src}
          alt={album.title}
          handleOpenAlbumDetail={() => setImageIndex(index)}
        />
      ))}
    </div>
  );
};
