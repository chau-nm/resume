import React, { FC, useState } from "react";
import styles from "./fab.module.scss";

type FABProps = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const FAB: FC<FABProps> = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["fab-container"]}>
      <button className={styles["fab"]} onClick={toggleFab}>
        {icon}
      </button>
      {isOpen && (
        <div className={styles["fab-menu"]}>
          {React.Children.map(children, (child, index) => (
            <div
              className={styles["fab-child"]}
              style={{ bottom: 80 * (index + 1) }}
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAB;
