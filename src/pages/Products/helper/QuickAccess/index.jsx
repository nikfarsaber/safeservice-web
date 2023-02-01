import styles from "./quickAccess.module.css";

import { UserSvg, ShoppingBagSvg, HeartSvg } from "../../../../assets/SvgInput";

const QuickAccess = () => {
  return (
    <div className={styles.quickAccess}>
      <UserSvg color="#292D32" />
      <ShoppingBagSvg color="#292D32" />
      <HeartSvg color="#292D32" />
    </div>
  );
};

export default QuickAccess;
