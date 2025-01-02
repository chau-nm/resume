import {FC, ReactNode} from "react";
import {ProjectFeatures} from "./ProjectFeatures";
import {ProjectTechnology} from "./ProjectTechnology";
import styles from "./stepContentFrame.module.scss";

type StepContentFrameProps = {
	projectName: string;
	position: string;
	summary: ReactNode;
	projectFeatures?: string[];
	projectTechnologyLogos?: string[];
	teamSize: number;
	role: string;
	issues?: string;
	result: string;
	projectLink?: string;
};

export const StepContentFrame: FC<StepContentFrameProps> = ({
  projectName,
  position,
  summary,
	projectTechnologyLogos,
  projectFeatures,
	teamSize,
	role,
	issues,
	result,
	projectLink
}) => (
	<div className={styles["step-content"]}>
		<div className={styles.head}>
			<span className={styles["project-name"]}>
				{projectName}
			</span>
			<br/>
			<i className={styles.position}>
        {position}
      </i>
		</div>
		<div className={styles.summary}>
			{summary}
		</div>
		<div className={styles.detail}>
			<ul>
				{
					projectFeatures &&
					<ProjectFeatures projectFeatures={projectFeatures} />
				}
				{
					projectTechnologyLogos &&
					<ProjectTechnology technologiesLogoUrls={projectTechnologyLogos} />
				}
				<li>
					<div className={styles.row}>
						<label>Team size:</label>
						<span>{teamSize}</span>
					</div>
				</li>
				<li>
					<div className={styles.row}>
						<label>Role:</label>
						<span>{role}</span>
					</div>
				</li>
				{
					issues &&
					<li>
						<div className={styles.row}>
							<label>Issues:</label>
							<span>{issues}</span>
						</div>
					</li>
				}
				<li>
					<div className={styles.row}>
						<label>Result:</label>
						<span>{result}</span>
					</div>
				</li>
				{
					projectLink &&
					<li>
						<div className={styles.row}>
							<label>Detail:</label>
							<span>
							  <a href={projectLink}>{projectLink}</a>
							 </span>
						</div>
					</li>
				}
			</ul>
		</div>
	</div>
);
