import {Link} from "react-scroll";
import styles from "./explorerButton.module.scss";
import {ABOUT} from "../../sections";

export const ExplorerButton = () => (
	<div className={styles["explore-button"]}>
		<Link to={ABOUT} smooth duration={500}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			Explore Now
		</Link>
	</div>
)