import {FC, ReactNode} from "react";
import styles from "./project.module.scss";

type ProjectProps = {
	projectName: string;
	startTime: string;
	endTime: string;
	children: ReactNode;
}

export const Project:FC<ProjectProps> = ({
	projectName,
	startTime,
	endTime,
	children
}) => {
	return (
		<div className={styles.project}>
			<div className={styles.step}>
				<div className={styles.circle}></div>
				<div className={styles.line}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.head}>
					<h3>{projectName}</h3>
					<span>{startTime} - {endTime}</span>
				</div>
				<div className={styles.description}>
					{children}
				</div>
			</div>
		</div>
	)
}