import IllustrationCoder from "assets/images/illustration_coder.png";
import {createRef, FC, useRef} from "react";
import {ContactLinnk} from "./ContactLink";
import styles from "./home.module.scss";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ExplorerButton} from "./ExplorerButton";

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
			{y: 20, opacity: 0.2},
			{y: 0, opacity: 1, duration: 2}
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
						<span>Hi there, I'm</span>
					</div>
					<div className={styles.position}>
						<h3 className={styles.top}>
							Software
						</h3>
						<h3 className={styles.bottom}>
							Developer
						</h3>
					</div>
					<div className={styles.maxim}>
						<span>Who delivers high-quality solutions that exceed expectations and drive success.</span>
					</div>
					<ContactLinnk/>
					<ExplorerButton />
				</div>
				<div ref={rightRef} className={styles.right}>
					<img src={IllustrationCoder} alt=""/>
				</div>
			</div>
			{/*<NextSectionButton ref={moveRef} title="ABOUT ME" path={ABOUT}/>*/}
		</div>
	)
};

export default Home;
