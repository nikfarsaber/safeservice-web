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
    <>
      <label
        className={`${styles[which]} ${className} ${styles.label} ${
          important && styles.important
        }`}
      >
        {text}
      </label>
      <input
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        className={`${styles[which]} ${className} ${styles.input} ${styles[direction]}`}
        type={type}
        placeholder={placeholder}
        value={enteredValue}
      />
      {hasError && <p>{errorText}</p>}
    </>
  );
};

export default Input;
