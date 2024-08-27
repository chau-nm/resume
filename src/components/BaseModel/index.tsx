import { FC, ReactNode, ReactSVGElement, useEffect, useState } from "react";
import styles from "./baseModel.module.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Button from "components/Button";

type BaseModelProps = {
  title: string;
  icon?: ReactSVGElement;
  visible?: boolean;
  children?: ReactNode;
  handleClose?: () => void;
  footer?: ReactNode[];
  footerAlign?: "left" | "center" | "right";
  handleCancel?: () => void;
  handleOk: () => void;
};

const BaseModel: FC<BaseModelProps> = ({
  title,
  icon,
  children,
  visible,
  handleClose,
  footer,
  footerAlign,
  handleCancel,
  handleOk,
}) => {
  const [isOpen, setIsOpen] = useState(visible ?? false);

  const close = () => {
    if (handleClose) {
      handleClose();
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(visible ?? false);
  }, [visible]);

  const modelClassNames =
    styles["base-model"] + (isOpen ? styles["base-model-opened"] : "");

  const defaultFooter: ReactNode[] = [
    <Button onClick={handleCancel}>Cancel</Button>,
    <Button onClick={handleOk}>Ok</Button>,
  ];

  return (
    <div className={modelClassNames}>
      <Header
        title={
          <>
            {icon}
            {""}
            {title}
          </>
        }
        handleClose={close}
      />
      {children}
      <Footer
        footerComponents={footer ?? defaultFooter}
        footerAlign={footerAlign ?? "right"}
      />
    </div>
  );
};

export default BaseModel;
