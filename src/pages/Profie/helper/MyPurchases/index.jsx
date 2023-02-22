import styles from "./myPurchases.module.css";

import { BasketSvg } from "../../../../assets/SvgInput";

const MyPurchases = () => {
  return (
    <div className={styles.profileDetail}>
      <h2>
        <BasketSvg color="#5085CF" className={styles.headerIcon} />
        خریدهای من
      </h2>
      <div className={styles.hr}></div>
      <div className={styles.gridBox}></div>
    </div>
  );
};

export default MyPurchases;
