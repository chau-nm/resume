import React, { useState } from "react";
import styles from "./fab.module.scss";

interface FabChildProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const FABChild: React.FC<FabChildProps> = ({
  icon,
  children,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChildFab = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    onClick?.();
    children && toggleChildFab();
  };

  return (
    <div className={styles["fab-child-container"]}>
      <button className={styles["fab-child-button"]} onClick={handleClick}>
        {icon}
      </button>
      {children && isOpen && (
        <div className={styles["fab-submenu"]}>{children}</div>
      )}
    </div>
  );
};
