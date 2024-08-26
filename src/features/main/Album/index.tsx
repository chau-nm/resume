import { FC, useState } from "react";
import styles from "./album.module.scss";
import { AlbumType } from "./type";
import { AlbumItem } from "./AlbumItem";
import hutao from "assets/images/image.webp";

const albumData: AlbumType[] = [
  {
    title: "Hutao",
    src: hutao,
  },
  {
    title: "Hutao",
    src: hutao,
  },
  {
    title: "Hutao",
    src: hutao,
  },
  {
    title: "Hutao",
    src: hutao,
  },
  {
    title: "Hutao",
    src: hutao,
  },
];

const Album: FC = () => {
  const [isOpenAlbumDetail, setIsOpennAlbumDetail] = useState(false);
  const [currentImageIndex, setIsCurrentImageIndex] = useState(0);

  const openAlbumDetail = (index: number) => {
    setIsOpennAlbumDetail(true);
    setIsCurrentImageIndex(index);
  };

  return (
    <div id="album" className={styles.album}>
      <div className={styles.title}>
        <h3>ALBUM</h3>
      </div>
      <div className={styles["album-items"]}>
        {albumData.map((data, index) => {
          return (
            <AlbumItem
              key={index}
              src={data.src}
              alt={data.title}
              handleOpenAlbumDetail={() => openAlbumDetail(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Album;
