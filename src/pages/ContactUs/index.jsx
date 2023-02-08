import Header from "../../layout/Header";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { LocationSvg, CallSvg } from "../../assets/SvgInput";
import { useState } from "react";

import locationImage from "../../assets/pngFolder/locationImage.png";

import styles from "./contactUs.module.css";

const ContactUs = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  const submitClickHandler = () => {
    setFormSubmited(true);
  };

  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <div className={styles.article}>
        <div className={styles.boarderBox}>
          <div className={styles.applyingBox}>
            <h3>پیگیری سفارش، انتقاد و پیشنهاد</h3>
            <Input
              text="موضوع"
              type="text"
              className={styles.input}
              important={true}
              which="black"
              submited={formSubmited}
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
            <Input
              text="متن پیام"
              type="text"
              className={styles.input}
              important={true}
              which="black"
              submited={formSubmited}
              validations={[
                {
                  validate: (value) => value.trim() !== "",
                  errorText: "این باکس نمی تواند خالی باشد.",
                },
                {
                  validate: (value) => value.trim().length > 9,
                  errorText: "مقادیر وارد شده باید بیشتر از ۱۰ کارکتر باشد.",
                },
              ]}
            />
            <Button
              className={styles.button}
              onClick={submitClickHandler}
              which="confirm"
              text="ثبت"
            />
          </div>
          <div className={styles.addressBox}>
            <p className={styles.pageTypic}>تماس با ما</p>
            <ul className={styles.contactUs}>
              <li>
                <CallSvg color={"#50C4CF"} />
                <p>۰۲۱-۷۱۷۵۸ ۷روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
              </li>
              <li>
                <LocationSvg color={"#50C4CF"} />
                <p>
                  خیابان ولیعصر پایین‌تر از پارک ساعی روبروی هتل سیمرغ پلاک ۲۲۰۸
                  طبقه منفی ۱
                </p>
              </li>
            </ul>
            <img
              src={locationImage}
              alt="sapra amin location"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
