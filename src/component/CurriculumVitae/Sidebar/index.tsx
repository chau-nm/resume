import {FC} from "react";
import styles from "./sidebar.module.scss";
import {Avatar} from "./Avatar";
import {Contact} from "./Contact";
import {Education} from "./Education";
import {Skill} from "./Skill";

export const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Avatar/>
			<Contact />
			<Education />
			<Skill />
		</div>
	)
}
