import styles from "./input.module.css";

const Input = ({ text, type, placeholder, which, className }) => {
  return (
    <>
      <label className={`${styles[which]} ${className} ${styles.label}`}>
        {text}
      </label>
      <input
        className={`${styles[which]} ${className} ${styles.input}`}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
