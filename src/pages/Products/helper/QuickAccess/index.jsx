import styles from "./quickAccess.module.css";

import { UserSvg, ShoppingBagSvg, HeartSvg } from "../../../../assets/SvgInput";
import { useNavigate } from "react-router-dom";

const QuickAccess = () => {
  const navigate = useNavigate();

  const cartClickHandler = () => {
    navigate("/cart", { replace: false });
  };

  return (
    <div className={styles.quickAccess}>
      <UserSvg color="#292D32" />
      <ShoppingBagSvg color="#292D32" onClick={cartClickHandler} />
      <HeartSvg color="#292D32" />
    </div>
  );
};

export default QuickAccess;
