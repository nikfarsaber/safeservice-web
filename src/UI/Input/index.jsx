import styles from "./input.module.css";

const Input = ({
  text,
  type,
  placeholder,
  which,
  className,
  important,
  direction,
}) => {
  return (
    <>
      <label className={`${styles[which]} ${className} ${styles.label} ${important && styles.important}`}>
        {text}
      </label>
      <input
        className={`${styles[which]} ${className} ${styles.input} ${styles[direction]}`}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
