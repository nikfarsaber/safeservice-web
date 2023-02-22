import styles from "./myDevice.module.css";

import { MyDeviceIcon } from "../../../../assets/SvgInput";

const MyDevice = () => {
  return (
    <div className={styles.profileDetail}>
      <h2>
        <MyDeviceIcon color="#5085CF" className={styles.headerIcon} />
        دستگاه‌های من
      </h2>
      <div className={styles.hr}></div>
      <div className={styles.gridBox}></div>
    </div>
  );
};

export default MyDevice;
