import Input from "../../UI/Input";
import Button from "../../UI/Button";
import SocialMediaRef from "../../component/SocialMediaRef";

import styles from "./authentication.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";
import { useState } from "react";

const Authentication = () => {
  const [wantRegister, setAreRegister] = useState(true);
  const [formSubmited, setFormSubmited] = useState(false);

  const ToggleRegister = () => {
    setFormSubmited(false);
    setAreRegister(!wantRegister);
  };

  const checkFormIsValid = () => {
    setFormSubmited(true);
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
            submited={formSubmited}
            reset={wantRegister}
            placeholder="لطفا نام و نام خانوادگی خود را وارد کنید."
            validations={[
              {
                validate: (value) => value.trim() !== "",
                errorText: "این باکس نمی تواند خالی باشد.",
              },
              {
                validate: (value) => value.trim().length > 3,
                errorText: "مقادیر وارد شده باید بیشتر از ۴ کارکتر باشد.",
              },
            ]}
          />
        )}
        <Input
          direction="left"
          className={styles.input}
          which="black"
          text="رمز عبور"
          type="password"
          important={wantRegister}
          submited={formSubmited}
          reset={wantRegister}
          placeholder="****"
          validations={[
            {
              validate: (value) => value.trim().length > 5,
              errorText: "رمز وارد شده باید بیشتر از ۶ کارکتر باشد.",
            },
          ]}
        />
        {wantRegister && (
          <Input
            direction="left"
            className={`${styles.input}`}
            which="black"
            text="تایید رمز عبور"
            type="password"
            important={true}
            submited={formSubmited}
            reset={wantRegister}
            placeholder="****"
            validations={[
              {
                validate: (value) => value.trim().length > 5,
                errorText: "رمز وارد شده باید بیشتر از ۶ کارکتر باشد.",
              },
            ]}
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
          text={wantRegister ? "شماره تلفن همراه" : "شماره تلفن همراه یا ایمیل"}
          type="text"
          important={wantRegister}
          submited={formSubmited}
          reset={wantRegister}
          placeholder="09xxxxxxxxx"
          validations={
            wantRegister
              ? [
                  {
                    validate: (value) =>
                      /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/.test(
                        value
                      ) || /^[\u06F0-\u06F9]{11}/.test(value),
                    errorText: "شماره تلفن وارد شده باید ۱۱ رقم باشد.",
                  },
                ]
              : [
                  {
                    validate: (value) =>
                      /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/.test(
                        value
                      ) || /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value),
                    errorText:
                      "شماره تماس یا ایمیل خود را به صورت صحیح وارد نمایید",
                  },
                ]
          }
        />
        {wantRegister && (
          <Input
            direction="left"
            className={styles.input}
            submited={formSubmited}
            reset={wantRegister}
            which="black"
            text="ایمیل"
            type="text"
            placeholder="nikfar.saber@gmail.com"
            validations={[
              {
                validate: (value) =>
                  /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value) || value.trim() === "",
                errorText: "فرمت مقادیر وارد شده صحیح نمی باشد",
              },
            ]}
          />
        )}
        <Button
          className={styles.button}
          onClick={checkFormIsValid}
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
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617560"
        }
        alt=""
      />
    </div>
  );
};

export default Authentication;
