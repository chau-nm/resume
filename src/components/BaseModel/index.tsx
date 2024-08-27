import { FC, ReactNode, ReactSVG, useEffect, useState } from "react";
import styles from "./baseModel.module.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Button from "components/Button";

type BaseModelProps = {
  title: string;
  icon?: React.SVGProps<SVGElement>;
  visible?: boolean;
  children?: ReactNode;
  handleClose?: () => void;
  footer?: ReactNode[];
  footerAlign?: "left" | "center" | "right";
  handleOk?: () => void;
};

const BaseModel: FC<BaseModelProps> = ({
  title,
  icon,
  children,
  visible,
  handleClose,
  footer,
  footerAlign,
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

  const modelClassNames = `${styles["base-model"]} ${
    isOpen ? styles["base-model-opened"] : styles["base-model-closed"]
  }`;

  const defaultFooter: ReactNode[] = [
    <Button key={1} onClick={close}>
      Cancel
    </Button>,
    <Button key={2} onClick={handleOk}>
      Ok
    </Button>,
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
      <div className={styles.content}>{children}</div>
      <Footer
        footerComponents={footer ?? defaultFooter}
        footerAlign={footerAlign ?? "right"}
      />
    </div>
  );
};

export default BaseModel;
