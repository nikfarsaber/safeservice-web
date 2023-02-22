import styles from "./input.module.css";
import { useState, useEffect } from "react";
import { EyeSlashSvg, EyeSvg } from "../../assets/SvgInput";

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
  value = "",
  text,
  type,
  placeholder,
  which = "black",
  className,
  important,
  direction,
  submited = false,
  inputEnabled = true,
  onChange,
  reset = false,
  inputValue = () => "",
  isValid = () => true,
  validations = [
    { validate: () => true, errorText: "مقادیر وارد شده صحیح نمی باشد" },
  ],
}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [valueIsValid, errorValidText] = checkValidation(
    validations,
    enteredValue
  );

  isValid(valueIsValid);

  useEffect(() => {
    setEnteredValue(value);
    inputValue(value);
  }, [value, inputValue]);

  if (reset !== resetFlag) {
    setEnteredValue("");
    setResetFlag(reset);
    setIsTouched(false);
    setHasError(false);
  }

  if (submited !== isTouched && submited === true) {
    setIsTouched(true);
  }

  if (hasError !== !valueIsValid && isTouched) {
    setHasError(!valueIsValid && isTouched);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    inputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
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
      <div>
        <input
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          className={`${styles[which]} ${styles.input} ${styles[direction]}`}
          type={
            type !== "password" ? { type } : showPassword ? "text" : "password"
          }
          placeholder={placeholder}
          value={enteredValue}
          disabled={!inputEnabled}
        />
        {type === "password" &&
          (!showPassword ? (
            <EyeSlashSvg
              className={styles.eyeIcon}
              color="#757575"
              onClick={toggleShowPassword}
            />
          ) : (
            <EyeSvg
              className={styles.eyeIcon}
              color="#757575"
              onClick={toggleShowPassword}
            />
          ))}
      </div>
      {hasError && <p className={styles.errorText}>{errorValidText}</p>}
    </div>
  );
};

export default Input;
