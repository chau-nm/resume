import React, {FC, useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import styles from "./infiniteSlider.module.scss";

type InfiniteSliderProps = {
	speed: number;
	items: React.ReactNode[];
}

const InfiniteSlider: FC<InfiniteSliderProps> = ({speed, items}) => {
	
	const sliderRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<GSAPTimeline>();
	
	useGSAP(() => {
		const loop = sliderRef.current;
		if (!loop) return;
		const firstChild = loop.children[0];
		loop.appendChild(firstChild.cloneNode(true));
		loop.appendChild(firstChild.cloneNode(true));
		
		timelineRef.current = gsap.timeline({repeat: Infinity});
		timelineRef.current
			.to(loop, {ease: 'none', xPercent: -100, duration: speed})
			.to(loop, {ease: 'none', x: 0, duration: 0});
	})
	
	const handleEnterItem = () => {
		timelineRef.current?.pause();
	}
	const handleLeaveItem = () => {
		timelineRef.current?.resume();
	}
	
	return (
		<div className={styles["infinite-slider-wrapper"]}>
			<div
				className={styles["infinite-slider"]}
				ref={sliderRef}
				onPointerEnter={handleEnterItem}
				onMouseLeave={handleLeaveItem}>
				<div className={styles["infinite-slider-items"]}>
					{
						items.map((item, index) => {
							return (
								<div key={index}>
									{item}
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	);
};

export default InfiniteSlider;
