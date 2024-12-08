import { TechnicalBlock } from "./TechnicalBlock"
import { technicalData } from "./technicalData"
import styles from "./technicalSlider.module.scss";

export const TechnicalSlider = () => {
    return (
        <div className={styles.technical}>
            {
                technicalData.map((data) => {
                    return (
                        <TechnicalBlock 
                            imageUrl={data.imageUrl}
                            caption={data.caption}
                        />
                    )
                })
            }
        </div>
    )
}