import {FC, useRef} from "react";
import styles from "./skillBlock.module.scss";
import {useGSAP} from "@gsap/react";
import {tweenFromToScroll} from "libs/gsap";

type SkillBlockProps = {
	title: string;
	content: string;
	position: boolean;
}

export const SkillBlock: FC<SkillBlockProps> = ({
  title,
  content,
  position
}) => {
	
	const ref = useRef(null);
	
	useGSAP(() => {
		tweenFromToScroll(
			ref.current,
			{ x: 50 * (position ? -1 : 1), opacity: 0 },
			{ x: 0, opacity: 1, duration: 1 }
		);
	})
	
	return (
		<div ref={ref} className={styles.block}>
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
			<div className={styles.content}>
				<p>{content}</p>
			</div>
		</div>
	)
}