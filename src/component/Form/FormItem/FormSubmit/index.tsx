import {FC, PropsWithChildren} from "react";
import styles from "./formSubmit.module.scss";
import Button from "component/Button";

export const FormSubmit: FC<PropsWithChildren> = ({
  children
}) => (
	<div className={styles["form-submit"]}>
		<Button type={"submit"}>{children}</Button>
	</div>
)
