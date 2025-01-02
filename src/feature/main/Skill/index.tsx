import {SectionWrapper} from "../SectionWrapper";
import {SkillBlock} from "./SkillBlock";
import {getSkillData} from "./skillData";
import styles from "./skill.module.scss";
import {TechnicalSlider} from "./TechnicalSlider";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";

const Skill = () => {
	const {t} = useTranslation();
	
	const skillData = useMemo(() => getSkillData(t), [t])
	
	return (
		<SectionWrapper
			sectionId="skill"
			title={t("skill.title")}
			className={styles.skill}>
			<div className={styles["block-wrapper"]}>
				{
					skillData.map((data, index) => {
						return (
							<SkillBlock position={index % 2 === 0} key={index} title={data.title} content={data.content}/>
						)
					})
				}
			</div>
			<div className={styles["technical-wrapper"]}>
				<TechnicalSlider/>
			</div>
		</SectionWrapper>
	)
}

export default Skill;