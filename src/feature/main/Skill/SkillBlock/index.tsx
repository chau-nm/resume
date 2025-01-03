import {FC, useRef} from "react";
import styles from "./skillBlock.module.scss";
import {useGSAP} from "@gsap/react";
import {tweenFromToScroll} from "libs/gsap";
import classNames from "classnames";
import {useTranslation} from "react-i18next";

type SkillBlockProps = {
	title: string;
	content: string;
	position: boolean;
	toggle: () => void;
	isShowMore: boolean;
}

export const SkillBlock: FC<SkillBlockProps> = ({
  title,
  content,
  position,
  toggle,
  isShowMore
}) => {
	const {t} = useTranslation();
	const ref = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	
	useGSAP(() => {
		tweenFromToScroll(
			ref.current,
			{x: 50 * (position ? -1 : 1), opacity: 0},
			{x: 0, opacity: 1, duration: 1}
		);
	})
	
	return (
		<div ref={ref} className={styles.block}>
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
			<div ref={contentRef} className={classNames(styles.content, {[styles.toggle]: isShowMore}) }>
				<p>{content}</p>
			</div>
			<div
				className={styles.toggle}
				onClick={toggle}
			>
				{
					!isShowMore
						? <span>{t("skill.showMore")}</span>
						: <span>{t("skill.showLess")}</span>
				}
			</div>
		</div>
	)
}