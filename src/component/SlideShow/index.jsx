import styles from "./slideShow.module.css";

import { Arrowleft, ArrowRight } from "../../assets/SvgInput";
import { useState } from "react";

const SlideShow = ({ className, pictureRef }) => {
  const [pictureNumber, pictureNumberState] = useState(0);

  const goNext = () => {
    if (pictureRef.length - 1 > pictureNumber)
      pictureNumberState(pictureNumber + 1);
  };

  const goPrevious = () => {
    if (pictureNumber > 0) pictureNumberState(pictureNumber - 1);
  };

  return (
    <div className={`${styles.slideShow} ${className}`}>
      <img className={styles.img} src={pictureRef[pictureNumber].url} alt="" />
      <div className={styles.sliderBox}>
        <ArrowRight onClick={goNext} className={styles.arrow} color="black" />
        <Arrowleft
          onClick={goPrevious}
          className={styles.arrow}
          color="black"
        />
      </div>
    </div>
  );
};

export default SlideShow;
