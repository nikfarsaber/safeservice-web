import NavBar from "../../component/NavBar";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

import styles from "./header.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";

const Header = ({ marginInline, className }) => {
  const navigate = useNavigate();
  const logInButtonHandler = () =>
    navigate("/authentication", { replace: true });

  return (
    <header
      style={{ marginInline: marginInline }}
      className={`${styles.header} ${className}`}
    >
      <div className={styles.rightSide}>
        <img className={styles.logo} src={logo} alt="safeservice logo" />
        <Button
          text="ورود/ثبت نام"
          which="register"
          className={styles.loginButton}
          onClick={logInButtonHandler}
        />
        <NavBar fontSize="20px" spaceBetween="24px" />
      </div>
      <div className={styles.leftSide}>
        <Button text="ریجستر موبایل" which="register" />
        <Button text="ثبت گارانتی" which="confirm" />
      </div>
    </header>
  );
};

export default Header;
