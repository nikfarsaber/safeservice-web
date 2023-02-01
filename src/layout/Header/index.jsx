import NavBar from "../../component/NavBar";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./header.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";
import { useEffect } from "react";

const url = "https://shop-api.safeservice.ir";

const Header = ({ marginInline, className }) => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(!!localStorage.getItem("userToken"));
  const [profileDetaile, setProfileDetaile] = useState([]);

  useEffect(() => {
    if (isLogIn) {
      fetch(`${url}/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          "Content-Type": "application/json",
        },
      }).then(async (response) => {
        setProfileDetaile(await response.json());
      });
    } else {
      setProfileDetaile([]);
    }
  }, [isLogIn]);
  console.log(profileDetaile);

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
    localStorage.removeItem("userToken");
    setIsLogIn(false);
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
        {!isLogIn ? (
          <Button
            text="ورود/ثبت نام"
            which="register"
            className={styles.loginButton}
            onClick={logInButtonHandler}
          />
        ) : (
          <div className={styles.profileView} onClick={logOutBottonHandler}>
            <p>{`${profileDetaile.name} ${profileDetaile.family}`}</p>
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
