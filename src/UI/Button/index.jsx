import styles from "./button.module.css";

const Button = ({ text, which, onClick }) => {
  return (
    <button onClick={onClick} className={styles[which]}>
      {text}
    </button>
  );
};

export default Button;
