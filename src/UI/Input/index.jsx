import styles from "./input.module.css";
import { useState } from "react";

const Input = ({
  text,
  type,
  placeholder,
  which,
  className,
  important,
  direction,
  validation = () => true,
  errorText = "value is NOT valid",
}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const valueIsValid = validation && validation(enteredValue);
  if (hasError !== !valueIsValid && isTouched) {
    setHasError(!valueIsValid && isTouched);
  }

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return (
    <div className={`${styles.inputBox} ${className}`}>
      <label
        className={`${styles[which]} ${styles.label} ${
          important && styles.important
        }`}
      >
        {text}
      </label>
      <input
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        className={`${styles[which]} ${styles.input} ${styles[direction]}`}
        type={type}
        placeholder={placeholder}
        value={enteredValue}
      />
      {hasError && <p className={styles.errorText}>{errorText}</p>}
    </div>
  );
};

export default Input;
