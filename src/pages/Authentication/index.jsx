import Input from "../../UI/Input";
import Button from "../../UI/Button";
import SocialMediaRef from "../../component/SocialMediaRef";

import styles from "./authentication.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";
import { useState } from "react";

const Authentication = () => {
  const [wantRegister, setAreRegister] = useState(true);

  const ToggleRegister = () => {
    const updateWantRegister = !wantRegister;
    setAreRegister(updateWantRegister);
  };

  return (
    <div className={styles.page}>
      <div className={styles.informationBox}>
        <img src={logo} alt="safeservice logo" className={styles.logo} />
        {wantRegister && (
          <Input
            className={styles.input}
            which="black"
            text="نام و نام خانوادگی"
            type="text"
            important={true}
            placeholder="لطفا نام و نام خانوادگی خود را وارد کنید."
          />
        )}
        <Input
          direction="left"
          className={styles.input}
          which="black"
          text="رمز عبور"
          type="password"
          important={wantRegister}
          placeholder="****"
        />
        {wantRegister && (
          <Input
            direction="left"
            className={`${styles.input}`}
            which="black"
            text="تایید رمز عبور"
            type="password"
            important={true}
            placeholder="****"
          />
        )}
        <label className={styles.remainingCheck}>
          <input type="checkbox" />
          مرا به خاطر بسپار
        </label>
        <Input
          direction="left"
          className={`${styles.input} ${!wantRegister && styles.goFirst}`}
          which="black"
          text="شماره تلفن همراه"
          type="text"
          important={wantRegister}
          placeholder="09xxxxxxxxx"
        />
        <Button
          className={styles.button}
          which="confirm"
          text={wantRegister ? "ثبت نام" : "ورود"}
        />
        <p className={styles.haveAccount}>
          {wantRegister ? "حساب کاربری دارید؟ " : "ساختن حساب کاربری جدید"}
          حساب کاربری دارید؟{" "}
          <span className={styles.goToSignin} onClick={ToggleRegister}>
            {wantRegister ? "ورود" : "ثبت نام"}
          </span>
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
