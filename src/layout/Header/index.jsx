import NavBar from "../../component/NavBar";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./header.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";
import { IconProfile } from "../../assets/SvgInput";
import { useEffect, useState } from "react";

const Header = ({ marginInline, className }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userShortDetail = useSelector((state) => state.user.userShortDetile);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (userShortDetail) {
      setUserName(userShortDetail.name + " " + userShortDetail.family);
    } else {
      setUserName("loading...");
    }
  }, [userShortDetail, isLoggedIn]);

  const logInButtonHandler = () => {
    navigate("/authentication", { replace: true });
  };

  const phoneRegisterClickHandler = () => {
    window.location.href = "https://safeservice.shop/webpanel/verify";
  };

  const logoClickHandler = () => {
    navigate("/home", { replace: true });
  };

  const logOutBottonHandler = () => {
    navigate("/profile", { replace: true });
  };

  return (
    <header
      style={{ marginInline: marginInline }}
      className={`${styles.header} ${className}`}
    >
      <div className={styles.rightSide}>
        <img
          className={styles.logo}
          src={logo}
          alt="safeservice logo"
          onClick={logoClickHandler}
        />
        {!isLoggedIn ? (
          <Button
            text="ورود/ثبت نام"
            which="register"
            className={styles.loginButton}
            onClick={logInButtonHandler}
          />
        ) : (
          <div className={styles.profileView} onClick={logOutBottonHandler}>
            <IconProfile className={styles.profileImg} color="black" />
            <p>{userName}</p>
          </div>
        )}
        <NavBar fontSize="20px" spaceBetween="24px" />
      </div>
      <div className={styles.leftSide}>
        <Button
          text="ریجستر موبایل"
          which="register"
          onClick={phoneRegisterClickHandler}
        />
        <Button text="ثبت گارانتی" which="confirm" />
      </div>
    </header>
  );
};

export default Header;
