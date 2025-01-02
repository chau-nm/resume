import {FC} from "react";
import styles from "./stepContentFrame.module.scss";

type ProjectTechinicalProps = {
	technologiesLogoUrls: string[];
}

export const ProjectTechnology:FC<ProjectTechinicalProps> = ({technologiesLogoUrls}) => (
	<li>
		<div className={styles.row}>
			<label>Project technologies:</label>
			<span>
				{
					technologiesLogoUrls.map((logo, index) => {
						return <img key={index} src={logo} height={30} alt={""}/>
					})
				}
			</span>
		</div>
	</li>
)