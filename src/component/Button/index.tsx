import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children?: ReactNode;
  color?: "blue" | "green";
};

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  color = "blue",
  children,
  ...rest
}) => {
  const getBackground = () => {
    switch (color) {
      case "blue":
        return "#0017c7";
      case "green":
        return "#009118";
      default:
        return "#0017c7";
    }
  };

  const getTextColor = () => {
    switch (color) {
      case "blue":
        return "#ffffff";
      case "green":
        return "#ffffff";
      default:
        return "#ffffff";
    }
  };

  return (
    <button
      className={classNames(styles.button, rest.className)}
      style={{
        background: getBackground(),
        color: getTextColor(),
        ...rest.style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
