import styles from "./button.module.css";

const Button = ({ text, which, className, onClick, importStyle }) => {
  return (
    <button
      style={importStyle && { ...importStyle }}
      onClick={onClick}
      className={`${styles[which]} ${styles.button} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
