import { CircleInfoOutline } from "assets/icons";
import BaseModel from "components/BaseModel";
import Button from "components/Button";
import { FC, ReactNode } from "react";
import { AlbumType } from "./type";

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
      Album detail
    </BaseModel>
  );
};
