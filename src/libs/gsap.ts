import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const timelineScroll = (target: Element | string) => 
  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "top: 20%",
      toggleActions: "play none none reverse",
    },
  });
