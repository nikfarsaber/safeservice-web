import styles from "./introductionMobileApp.module.css";

import arrowOne from "../../../../assets/pngFolder/arrow1.png";
import arrowTwo from "../../../../assets/pngFolder/arrow2.png";
import arrowThree from "../../../../assets/pngFolder/arrow3.png";
import introductionMobileAppPic from "../../../../assets/pngFolder/introduction-mobile-app.png";

const IntroductionMobileApp = () => {
  return (
    <div className={styles.introductionMobileApp}>
      <div id={styles.refForIntroduction}>
        <img
          id={styles.phoneImg}
          src={introductionMobileAppPic}
          alt="mobile-screen"
        />
        <span
          className={`${styles.absolute} ${styles.text}`}
          id={styles.waranty}
        >
          گارانتی موبایلت رو ثبت کن:)
        </span>
        <span
          className={`${styles.absolute} ${styles.text}`}
          id={styles.bestBny}
        >
          بهترین و جدیدترین تلفن‌های همراه و بخر:)
        </span>
        <span
          className={`${styles.absolute} ${styles.text}`}
          id={styles.newNews}
        >
          جدیدترین اخبار در مورد موبایلت و اینجا بخون:)
        </span>
        <img
          src={arrowOne}
          alt="arrow-dashed-line-one"
          className={styles.absolute}
        />
        <img
          src={arrowTwo}
          alt="arrow-dashed-line-two"
          className={styles.absolute}
        />
        <img
          src={arrowThree}
          alt="arrow-dashed-line-three"
          className={styles.absolute}
        />
      </div>
    </div>
  );
};

export default IntroductionMobileApp;
