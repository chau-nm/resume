import { useGSAP } from "@gsap/react";
import Button from "component/Button";
import { useMultipleRef } from "hook";
import { timelineScroll } from "libs/gsap";
import { FC } from "react";
import { SectionWrapper } from "../SectionWrapper";
import styles from "./summary.module.scss";
import {useNavigate} from "react-router-dom";
import { CV } from "common/path";

enum refNames {
  summary = "summary",
  content = "content",
  button = "button",
}

const Summary: FC = () => {
  const { getRef, setRef } = useMultipleRef<HTMLDivElement | null>();
  const navigate = useNavigate();

  useGSAP(() => {
    const timeline = timelineScroll(getRef(refNames.summary));
    applyContentTween(timeline);
    applyButtonTween(timeline);
  });

  const applyContentTween = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.content),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 }
    );
  };

  const applyButtonTween = (timeline: GSAPTimeline) => {
    timeline.fromTo(
      getRef(refNames.button),
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    );
  };
  
  const handleMoveViewCV = () => {
    navigate(CV);
  }

  return (
    <SectionWrapper
      sectionId="summary"
      title="SUMMARY"
      className={styles["summary"]}
    >
      <div ref={(element) => setRef(refNames.summary, element)}>
        <div
          ref={(element) => setRef(refNames.content, element)}
          className={styles["content"]}
        >
          <p>
            Hi, I'm Nguyen Minh Chau. I'm a Software Developer with 2 years of
            experience in developing and maintaining software applications. I
            have a strong foundation in Java, JavaScript & TypeScript, Python
            and PHP. I have worked on projects involving React, Spring boot,
            Yii2, NestJS. I am passionate about creating efficient and scalable
            software solutions.
          </p>
        </div>
        <div
          ref={(element) => setRef(refNames.button, element)}
          className={styles["view-cv-button"]}
        >
          <Button onClick={handleMoveViewCV}>View CV</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Summary;
