import styles from "./notFound.module.css";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goToHomeClickHandler = () => {
    navigate("home", { replace: true });
  };

  return (
    <div className={styles.notFound}>
      <h1>404 Error</h1>
      <p>page not found</p>
      <p className={styles.goToHome} onClick={goToHomeClickHandler}>
        back to Home page
      </p>
    </div>
  );
};

export default NotFound;
