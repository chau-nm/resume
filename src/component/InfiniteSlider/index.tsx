import React, {FC, useEffect, useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import styles from "./infiniteSlider.module.scss";

type InfiniteSliderProps = {
    speed: number;
    items: React.ReactNode[];
}

const InfiniteSlider: FC<InfiniteSliderProps> = ({
    speed,
    items
}) => {

    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const loop = ref.current;
        if (!loop) return;
        const firstChild = loop.children[0];
        loop.appendChild(firstChild.cloneNode(true));
        loop.appendChild(firstChild.cloneNode(true));

        const infiniteTimeline = gsap.timeline({ repeat: Infinity });
        infiniteTimeline
            .to(loop, speed, { ease: 'none', xPercent: -100 })
            .to(loop, 0, { ease: 'none', x: 0 });
    })

    return (
        <div className={styles["infinite-slider-wrapper"]}>
            <div className={styles["infinite-slider"]} ref={ref}>
                <div className={styles["infinite-slider-items"]}>
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index}>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default InfiniteSlider;
