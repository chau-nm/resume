import { FC } from "react";
import styles from "./fab.module.scss";

type FABProps = {
  icon?: React.SVGProps<SVGSVGElement>;
};

const FAB: FC<FABProps> = ({ icon }) => {
  return (
    <div className={styles["fab"]}>
      <>{icon}</>
    </div>
  );
};

export default FAB;
