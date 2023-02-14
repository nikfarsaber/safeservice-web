import NavBar from "../../component/NavBar";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./header.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";

const url = "https://shop-api.safeservice.ir";

const Header = ({ marginInline, className }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userShortDetail = useSelector((state) => state.user.userShortDetile);
  const navigate = useNavigate();

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
            <p>{`${userShortDetail.name} ${userShortDetail.family}`}</p>
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
