import { FC, useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./album.module.scss";
import { AlbumDetailPopup } from "./AlbumDetailPopup";
import { AlbumItem } from "./AlbumItem";
import { albumData } from "./data";

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
        {albumData.length <= 0 ? (
          <div className={styles["no-data"]}>
            <span>There is no data</span>
          </div>
        ) : (
          albumData.map((data, index) => {
            return (
              <AlbumItem
                key={index}
                src={data.src}
                alt={data.title}
                handleOpenAlbumDetail={() => openAlbumDetail(index)}
              />
            );
          })
        )}
      </div>
      {albumData.length > 0 && (
        <AlbumDetailPopup
          visible={isOpenAlbumDetail}
          handleClose={handleCloseAlbumDetail}
          albumData={albumData}
          imageIndex={currentImageIndex}
          setImageIndex={setIsCurrentImageIndex}
        />
      )}
    </SectionWrapper>
  );
};

export default Album;
