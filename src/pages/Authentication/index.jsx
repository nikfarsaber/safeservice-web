import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import SocialMediaRef from "../../component/SocialMediaRef";

import styles from "./authentication.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";

const Authentication = () => {
  return (
    <div className={styles.page}>
      <div className={styles.informationBox}>
        <img src={logo} alt="safeservice logo" className={styles.logo} />
        <Input
          className={styles.input}
          which="black"
          text="نام و نام خانوادگی"
          type="text"
          important={true}
          placeholder="لطفا نام و نام خانوادگی خود را وارد کنید."
        />
        <Input
          direction="left"
          className={styles.input}
          which="black"
          text="رمز عبور"
          type="password"
          important={true}
          placeholder="****"
        />
        <Input
          direction="left"
          className={`${styles.input} ${styles.passwordCheck}`}
          which="black"
          text="تایید رمز عبور"
          type="password"
          important={true}
          placeholder="****"
        />
        <label className={styles.remainingCheck}>
          <input type="checkbox" />
          مرا به خاطر بسپار
        </label>
        <Input
          direction="left"
          className={styles.input}
          which="black"
          text="شماره تلفن همراه"
          type="text"
          important={true}
          placeholder="09xxxxxxxxx"
        />
        <Button className={styles.button} which="confirm" text="ثبت نام" />
        <p className={styles.haveAccount}>
          حساب کاربری دارید؟{" "}
          <Link className={styles.goToSignin} to="/signin">
            ورود
          </Link>
        </p>
        <hr className={styles.dividerLine} />
        <div className={styles.socialMediaBox}>
          <p>شبکه های اجتماعی:</p>
          <SocialMediaRef color="#5085CF" />
        </div>
      </div>
      <img
        className={styles.img}
        src={
          "https://cdn.vox-cdn.com/uploads/chorus_asset/file/24059001/226270_iPHONE_14_PHO_akrales_0788_sq.jpg"
        }
        alt=""
      />
    </div>
  );
};

export default Authentication;
