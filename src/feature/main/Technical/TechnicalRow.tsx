import { FC } from "react";
import styles from "./technical.module.scss";

type TechnicalRowProps = {
  technicalDataSource: string[];
};

export const TechnicalRow: FC<TechnicalRowProps> = ({
  technicalDataSource,
}) => {
  return (
    <div className={styles["technical-row"]}>
      <ul>
        {technicalDataSource.map((source, index) => {
          return (
            <li key={index}>
              <img src={source} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
