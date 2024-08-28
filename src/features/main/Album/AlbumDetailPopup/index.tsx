import { CircleInfoOutline } from "assets/icons";
import BaseModel from "components/BaseModel";
import Button from "components/Button";
import { FC, ReactNode } from "react";
import { AlbumType } from "../type";
import { AlbumDetail } from "./AlbumDetail";
import { AlbumList } from "./AlbumList";

type AlbumDetailPopupProps = {
  visible: boolean;
  handleClose: () => void;
  imageIndex: number;
  setImageIndex: (index: number) => void;
  albumData: AlbumType[];
};

export const AlbumDetailPopup: FC<AlbumDetailPopupProps> = ({
  visible,
  handleClose,
  albumData,
  imageIndex,
  setImageIndex,
}) => {
  const footer: ReactNode[] = [
    <Button key={1} onClick={handleClose}>
      Close
    </Button>,
  ];
  return (
    <BaseModel
      title="Album detail"
      visible={visible}
      handleClose={handleClose}
      footer={footer}
      icon={<CircleInfoOutline />}
    >
      <AlbumDetail album={albumData[imageIndex]} />
      <AlbumList albumData={albumData} setImageIndex={setImageIndex} />
    </BaseModel>
  );
};
