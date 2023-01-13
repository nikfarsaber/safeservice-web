import styles from "./input.module.css";
import { useState } from "react";

const checkValidation = (validationArray, inputValue) => {
  const indexErrorValidate = validationArray.findIndex(
    (element) => !element.validate(inputValue)
  );
  if (indexErrorValidate !== -1) {
    return [false, validationArray[indexErrorValidate].errorText];
  }
  return [true, ""];
};

const Input = ({
  text,
  type,
  placeholder,
  which,
  className,
  important,
  direction,
  submited = false,
  validations = [
    { validate: () => true, errorText: "مقادیر وارد شده صحیح نمی باشد" },
  ],
}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [valueIsValid, errorValidText] = checkValidation(
    validations,
    enteredValue
  );

  if (submited !== isTouched) {
    setIsTouched(true);
  }

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
      {hasError && <p className={styles.errorText}>{errorValidText}</p>}
    </div>
  );
};

export default Input;
