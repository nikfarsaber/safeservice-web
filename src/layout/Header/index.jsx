import NavBar from "../../component/NavBar";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./header.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";

const Header = ({ marginInline, className }) => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem("userToken"));
  const logInButtonHandler = () =>
    navigate("/authentication", { replace: true });

  const logOutBottonHandler = () => {
    localStorage.removeItem("userToken");
    setIsLogIn("");
  };

  return (
    <header
      style={{ marginInline: marginInline }}
      className={`${styles.header} ${className}`}
    >
      <div className={styles.rightSide}>
        <img className={styles.logo} src={logo} alt="safeservice logo" />
        {!isLogIn ? (
          <Button
            text="ورود/ثبت نام"
            which="register"
            className={styles.loginButton}
            onClick={logInButtonHandler}
          />
        ) : (
          <Button
            text="خروج از حساب کاربری"
            which="register"
            className={styles.loginButton}
            onClick={logOutBottonHandler}
          />
        )}
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
