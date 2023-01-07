import styles from "./footer.module.css";

import enamadIcon from "../../assets/pngFolder/enamad.png";
import logo from "../../assets/pngFolder/safeservice-logo.png";
import { CallSvg, LocationSvg, MailSvg } from "../../assets/SvgInput";
import SocialMediaRef from "../../component/SocialMediaRef";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.upSection}>
        <img src={logo} alt="safeservice logo" className={styles.logo} />
        <ul className={styles.aboutUs}>
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>اخبار سیف سرویس</li>
        </ul>
        <ul className={styles.contactUs}>
          <li>
            <LocationSvg color={"white"} />
            <p>
              خیابان ولیعصر پایین‌تر از پارک ساعی روبروی هتل سیمرغ پلاک ۲۲۰۸
              طبقه منفی ۱
            </p>
          </li>
          <li>
            <CallSvg color={"white"} />
            <p>۰۲۱-۷۱۷۵۸ ۷روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </li>
          <li>
            <MailSvg color={"white"} />
            <p>info@safeservice.co</p>
          </li>
          <li>
            <p>شبکه های اجتماعی:</p>
            <SocialMediaRef />
          </li>
        </ul>
      </div>
      <div className={styles.downSection}>
        <Input
          type="text"
          text="ثبت ایمیل در خبرنامه"
          placeholder="آدرس ایمیل شما"
        />
        <Button which="confirm" text="ثبت" importStyle={{ fontSize: "20px" }} />
      </div>
      <img src={enamadIcon} alt="enamad logo" />
    </footer>
  );
};

export default Footer;
