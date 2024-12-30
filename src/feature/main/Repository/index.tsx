import {FC, useRef} from "react";
import {SectionWrapper} from "../SectionWrapper";
import {data} from "./data";
import {RepositoryItem} from "./RepositoryItem";
import styles from "./repository.module.scss";
import {useGSAP} from "@gsap/react";
import {tweenFromToScroll} from "libs/gsap";
import {ButtonLink} from "component/ButtonLink";

const Repository: FC = () => {
	
	const repoRef = useRef(null);
	const moreButtonRef = useRef(null);
	
	useGSAP(() => {
		applyRepoTween();
		applyMoreTween();
	})
	
	const applyRepoTween = () => {
		tweenFromToScroll(
			repoRef.current,
			{
				y: 10,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 1
			}
		);
	}
	
	const applyMoreTween = () => {
		tweenFromToScroll(
			moreButtonRef.current,
			{
				y: 10,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 1
			}
		);
	}
	
	return (
		<SectionWrapper sectionId="repository" title="Repository">
			<div ref={repoRef} className={styles["item-wrapper"]}>
				{
					data.map((repo, index) => (
						<RepositoryItem
							key={index}
							name={repo.name}
							description={repo.description}
							technilogies={repo.technologies}
							link={repo.link}
						/>
					))
				}
			</div>
			<div ref={moreButtonRef} className={styles.more}>
				<ButtonLink href={"https://github.com/chau-nm"}>MORE</ButtonLink>
			</div>
		</SectionWrapper>
	);
};

export default Repository;
