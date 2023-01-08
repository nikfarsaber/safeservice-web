import {
  BestIconSvg,
  BestPriceIconSvg,
  Support24IconSvg,
  ValidityIconSvg,
} from "../../../../assets/SvgInput";

import styles from "./worthiness.module.css";

const Worthiness = ({className}) => {
  return (
    <div className={`${styles.worthiness} ${className}`}>
      <div className={styles.WorthinessItem}>
        <div className={styles.border}>
          <BestPriceIconSvg className={styles.worthinessicon} />
        </div>
        <p>بهترین قیمت</p>
      </div>
      <div className={styles.WorthinessItem}>
        <div className={styles.border}>
          <ValidityIconSvg className={styles.worthinessicon} />
        </div>
        <p>اصالت کالا</p>
      </div>
      <div className={styles.WorthinessItem}>
        <div className={styles.border}>
          <Support24IconSvg className={styles.worthinessicon} />
        </div>
        <p>پشتیبانی ۲۴ ساعته</p>
      </div>
      <div className={styles.WorthinessItem}>
        <div className={styles.border}>
          <BestIconSvg className={styles.worthinessicon} />
        </div>
        <p>تضمین کیفیت</p>
      </div>
    </div>
  );
};

export default Worthiness;
