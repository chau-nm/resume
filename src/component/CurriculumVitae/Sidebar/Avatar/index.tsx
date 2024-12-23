import {FC} from "react";
import styles from "./avatar.module.scss";

export const Avatar: FC = () => {
	return (
		<div className={styles.avatar}>
			<img src={""} alt={""}/>
		</div>
	)
}