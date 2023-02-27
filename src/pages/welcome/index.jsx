import NavBar from "../../component/NavBar";
import SocialMedia from "./helper/SocialMedia";
import { useNavigate } from "react-router-dom";

import styles from "./welcome.module.css";

import welcomeBackground from "../../assets/pngFolder/welcome-background.png";
import { ArowSvg } from "../../assets/SvgInput";

const Welcome = () => {
  const navigate = useNavigate();
  const goToHomeClickHandler = () => navigate("/Home", { replace: true });

  const phoneRegisterClickHandler = () => {
    window.location.href = "https://safeservice.shop/webpanel/verify";
  };

  return (
    <div className={styles.page}>
      <img className={styles.backgroundImg} src={welcomeBackground} alt="" />
      <div className={styles.shadowOnBackground}></div>
      <header className={styles.header}>
        <NavBar />
        <button className={styles.getApp}>دریافت اپلیکیشن</button>
      </header>
      <SocialMedia className={styles.socialMediaBox} />
      <div className={styles.linkTo}>
        <p onClick={phoneRegisterClickHandler}>ریجستر موبایل</p>
        {/* <p>۰۲ / ثبت گارانتی</p> */}
      </div>
      <div className={styles.goToHome}>
        <ArowSvg color={"white"} onClick={goToHomeClickHandler} />
      </div>
      <div className={styles.textArea}>
        <p>خرید آسان و بی‌دغدغه تلفن‌های همراه</p>
        <p>از برندهای روز دنیا با بهترین قیمت و بدون واسطه با</p>
        <h3>سیف سرویس</h3>
      </div>
    </div>
  );
};

export default Welcome;
