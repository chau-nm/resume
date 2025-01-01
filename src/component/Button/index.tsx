import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children?: ReactNode;
};

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {

  return (
    <button
      className={classNames(styles.button, rest.className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
