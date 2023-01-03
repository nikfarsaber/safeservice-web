import NavBar from "../../component/NavBar";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

import styles from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const logInButtonHandler = () => navigate("/login-signup", { replace: true });
  return (
    <header className={styles.header}>
      <Button
        text="ورود/ثبت نام"
        which="register"
        onClick={logInButtonHandler}
      />
      <NavBar fontSize="20px" spaceBetween="24px" />
    </header>
  );
};

export default Header;
