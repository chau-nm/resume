import {Link} from "react-scroll";
import {ABOUT} from "../sections";
import styles from "./home.module.scss";

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