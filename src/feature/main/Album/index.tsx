import { FC, useState } from "react";
import styles from "./album.module.scss";
import { AlbumType } from "./type";
import { AlbumItem } from "./AlbumItem";
import hutao from "assets/images/image.webp";
import img from "assets/images/background.jpg";
import { AlbumDetailPopup } from "./AlbumDetailPopup";
import { SectionWrapper } from "../SectionWrapper";

const albumData: AlbumType[] = [
  {
    title: "Hutao",
    src: hutao,
  },
  {
    title: "Hutao",
    src: img,
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

  const handleCloseAlbumDetail = () => {
    setIsOpennAlbumDetail(false);
  };

  return (
    <SectionWrapper sectionId="album" title="ALBUM" className={styles.album}>
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
      <AlbumDetailPopup
        visible={isOpenAlbumDetail}
        handleClose={handleCloseAlbumDetail}
        albumData={albumData}
        imageIndex={currentImageIndex}
        setImageIndex={setIsCurrentImageIndex}
      />
    </SectionWrapper>
  );
};

export default Album;
