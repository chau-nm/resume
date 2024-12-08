import { FC } from "react";
import styles from "./skillBlock.module.scss";

type SkillBlockProps = {
    title: string;
    content: string;
}

export const SkillBlock: FC<SkillBlockProps> = ({
    title,
    content
}) => {
    return (
        <div className={styles.block}>
            <div className={styles.title}>
                <h3>{title}</h3>
            </div>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
        </div>
    )
}