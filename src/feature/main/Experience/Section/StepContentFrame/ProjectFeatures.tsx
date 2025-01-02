import {FC} from "react";
import styles from "./stepContentFrame.module.scss";

type ProjectFeaturesProps = {
	projectFeatures: string[];
}

export const ProjectFeatures: FC<ProjectFeaturesProps> = ({projectFeatures}) => (
	<li>
		<div className={styles.row}>
			<label>Project features:</label>
			<span>
				{
					projectFeatures.map((feature, index) => {
						return `${feature}${index === projectFeatures.length - 1 ? '' : ', '}`;
					})
				}
			</span>
		</div>
	</li>
)