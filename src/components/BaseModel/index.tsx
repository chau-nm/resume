import { FC, ReactNode, ReactSVGElement } from "react";
import styles from "./baseModel.module.scss";

type BaseModelProps = {
  title: string;
  icon: ReactSVGElement;
};

const BaseModel: FC<BaseModelProps> = ({}) => {
  return <div className={styles["base-model"]}></div>;
};

export default BaseModel;
