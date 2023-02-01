import styles from "./scrollCircle.module.css";

import { MobileIconSvg } from "../../assets/SvgInput";
import dashedBorder from "../../assets/pngFolder/dashed-border.png";
import { useState } from "react";

const ScrollCircle = () => {
  const [rotateDeg, setRotateDeg] = useState(0);

  const maxScrolly =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.addEventListener("scroll", (e) => {
    const lastKnownScrollPosition = window.scrollY;
    setRotateDeg(`rotate(${(lastKnownScrollPosition * 360) / maxScrolly}deg)`);
  });

  return (
    <div className={styles.scrollCircle}>
      <div className={styles.mobileAppBlur}></div>
      <div className={styles.mobileAppBox}>
        <img
          style={{ transform: rotateDeg }}
          src={dashedBorder}
          className={styles.dashedBorder}
          alt="dashed border"
        />
        <div className={styles.mobileAppBoxDisplay}>
          <MobileIconSvg className={styles.mobileIcon} color="#5085CF" />
          <p>اپ سیف سرویس</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollCircle;
