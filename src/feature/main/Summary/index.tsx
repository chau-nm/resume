import { FC } from "react";
import styles from "./summary.module.scss";
import Button from "component/Button";
import classNames from "classnames";

const Summary: FC = () => {
  return (
    <div id="summary" className={classNames("section", styles.summary)}>
      <div className={styles.title}>
        <h3>SUMMARY</h3>
      </div>
      <div className={styles.content}>
        <p>
          Hi, I'm Nguyen Minh Chau. I'm a Software Engineer with 2 years of
          experience in developing and maintaining software applications. I have
          a strong foundation in Java, JavaScript & TypeScript, Python and PHP.
          I have worked on projects involving React, Spring boot, Yii2, NestJS.
          I am passionate about creating efficient and scalable software
          solutions.
        </p>
      </div>
      <div className={styles.viewCVButton}>
        <Button>View CV</Button>
      </div>
    </div>
  );
};

export default Summary;
