import styles from "./button.module.css";

const Button = ({ text, which, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[which]} ${styles.button} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
