import IllustrationCoder from "assets/images/illustration_coder.png";
import NextSectionButton from "component/NextSectionButton";
import {createRef, FC, useRef} from "react";
import {Link} from "react-scroll";
import {SUMMARY} from "../sections";
import {ContactLinnk} from "./ContactLink";
import styles from "./home.module.scss";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Home: FC = () => {
	
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const moveRef = createRef<HTMLDivElement>();
	
	useGSAP(() => {
		const timeline = gsap.timeline();
		applyLeftTween(timeline);
		applyRightTween(timeline);
		applyMoveTween(timeline);
	})
	
	const applyLeftTween = (timeline: GSAPTimeline) => {
		timeline.fromTo(
			leftRef.current,
			{y: 10, opacity: 0.2},
			{y: 0, opacity: 1, duration: 1}
		);
	}
	
	const applyRightTween = (timeline: GSAPTimeline) => {
		timeline.fromTo(
			rightRef.current,
			{x: 10, opacity: 0},
			{x: 0, opacity: 1, duration: 1},
			0.5
		);
	}
	
	const applyMoveTween = (timeline: GSAPTimeline) => {
		timeline.fromTo(
			moveRef.current,
			{y: -10, opacity: 0},
			{x: 0, opacity: 1, duration: 1},
			1
		);
	}
	
	return (
		<div id="home" className={styles.home}>
			<div className={styles.content}>
				<div ref={leftRef} className={styles.left}>
					<div className={styles.greeting}>
						<span>👋 I'm N.M.Chau</span>
					</div>
					<div className={styles.position}>
						<span>👉 Software Developer 👈</span>
					</div>
					<ContactLinnk/>
					<div className={styles["explore-button"]}>
						<Link to={SUMMARY} smooth duration={500}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Explore Now
						</Link>
					</div>
				</div>
				<div ref={rightRef} className={styles.right}>
					<img src={IllustrationCoder} alt=""/>
				</div>
			</div>
			<NextSectionButton ref={moveRef} title="SUMMARY" path={"summary"}/>
		</div>
	)
};

export default Home;
