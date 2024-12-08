import { SectionWrapper } from "../SectionWrapper";
import { SkillBlock } from "./SkillBlock";
import { skillData } from "./skillData";
import styles from "./skill.module.scss";
import { TechnicalSlider } from "./TechnicalSlider";

const Skill = () => {
    return (
        <SectionWrapper 
            sectionId="skill" 
            title="SKILL"
            className={styles.skill}>
                <div className={styles["block-wrapper"]}>
                    {
                        skillData.map((data) => {
                            return (
                                <SkillBlock title={data.title} content={data.content}/>
                            )
                        })
                    }
                </div>
                <div className={styles["technical-wrapper"]}>
                    <TechnicalSlider />
                </div>
        </SectionWrapper>
    )
}

export default Skill;