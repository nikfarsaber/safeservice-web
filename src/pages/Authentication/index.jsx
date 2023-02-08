import Input from "../../UI/Input";
import Button from "../../UI/Button";
import SocialMediaRef from "../../component/SocialMediaRef";
import {
  useRegisterByPhoneNumberMutation,
  useLoginByPhoneNumberMutation,
  useLoginByOtpMutation,
  useRegisterByOtpMutation,
} from "../../redux/services/authenticationApi";

import { useNavigate } from "react-router-dom";

import styles from "./authentication.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";
import { useEffect, useState } from "react";

const url = "https://shop-api.safeservice.ir";

const Authentication = () => {
  let [
    isInputNumberValid,
    isInputFirstNameValid,
    isInputLastNameValid,
    isInputPasswordValid,
  ] = [false, false, false, false];

  let [
    inputNumberValue,
    inputFirstNameValue,
    inputLastNameValue,
    inputPasswordValue,
  ] = [];

  const [
    inputNumberInTrigger,
    { data: logInNumberData, error: logInNumberError, isLoading },
  ] = useLoginByPhoneNumberMutation();

  const [sinUpNumberTrigger, { data: signUpNumberData }] =
    useRegisterByPhoneNumberMutation();

  const [logInTrigger, { data: logInData, error: logInError }] =
    useLoginByOtpMutation();

  const [registerTrigger, { data: registerData }] = useRegisterByOtpMutation();

  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmited, setFormSubmited] = useState(false);
  const [situation, setSituation] = useState("inputPhoneNumber");

  let isFormValid = false;

  useEffect(() => {
    if (logInNumberError?.status === 404) {
      if (isFormValid) {
        if (situation === "inputPhoneNumber") {
          console.log("go to signUp");
          sinUpNumberTrigger(inputNumberValue);
        }
      }
    }

    if (logInNumberData || signUpNumberData) {
      console.log(logInNumberData, signUpNumberData);
      setPhoneNumber(inputNumberValue);
      setSituation(logInNumberData ? "signIn" : "signUp");
      setFormSubmited(false);
      isFormValid = false;
    }

    if (logInData || registerData) {
      console.log(logInData, registerData);
      console.log(logInData.token);
      const data = logInData || registerData;
      data.token && localStorage.setItem("userToken", data.token);
      navigate("/Home", { replace: true });
    }
  }, [
    logInNumberError,
    logInNumberData,
    signUpNumberData,
    registerData,
    logInData,
  ]);

  const submitClickHandler = () => {
    setFormSubmited(true);
    formValidCheck();
    if (isFormValid) {
      console.log("go to signIn");
      if (situation === "inputPhoneNumber") {
        inputNumberInTrigger(inputNumberValue);
      } else if (situation === "signIn") {
        logInTrigger({
          phoneNumber,
          otpNumber: inputPasswordValue,
        });
      } else if (situation === "signUp") {
        registerTrigger({
          phoneNumber,
          otpNumber: inputPasswordValue,
          name: inputFirstNameValue,
          family: inputLastNameValue,
        });
      }
    }
  };

  const formValidCheck = () => {
    if (situation === "inputPhoneNumber") {
      isFormValid = isInputNumberValid;
    } else if (situation === "signUp") {
      isFormValid =
        isInputFirstNameValid && isInputLastNameValid && isInputPasswordValid;
    } else if (situation === "signIn") {
      isFormValid = isInputPasswordValid;
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.informationBox}>
        <img src={logo} alt="safeservice logo" className={styles.logo} />
        {situation === "signUp" && (
          <>
            <Input
              className={styles.input}
              which="black"
              text="نام"
              type="text"
              important={true}
              submited={formSubmited}
              inputValue={(value) => (inputFirstNameValue = value)}
              isValid={(value) => {
                isInputFirstNameValid = value;
                formValidCheck();
              }}
              placeholder="لطفا نام خود را وارد کنید."
              validations={[
                {
                  validate: (value) => value.trim() !== "",
                  errorText: "این باکس نمی تواند خالی باشد.",
                },
                {
                  validate: (value) => value.trim().length > 1,
                  errorText: "مقادیر وارد شده باید بیشتر از ۲ کارکتر باشد.",
                },
              ]}
            />
            <Input
              className={styles.input}
              which="black"
              text="نام خانوادگی"
              type="text"
              important={true}
              submited={formSubmited}
              inputValue={(value) => (inputLastNameValue = value)}
              isValid={(value) => {
                isInputLastNameValid = value;
                formValidCheck();
              }}
              placeholder="لطفا نام خانوادگی خود را وارد کنید."
              validations={[
                {
                  validate: (value) => value.trim() !== "",
                  errorText: "این باکس نمی تواند خالی باشد.",
                },
                {
                  validate: (value) => value.trim().length > 1,
                  errorText: "مقادیر وارد شده باید بیشتر از ۲ کارکتر باشد.",
                },
              ]}
            />
          </>
        )}
        {(situation === "signIn" || situation === "signUp") && (
          <Input
            className={styles.input}
            which="black"
            text="رمز یکبار مصرف"
            type="text"
            important={true}
            submited={formSubmited}
            inputValue={(value) => (inputPasswordValue = value)}
            isValid={(value) => {
              isInputPasswordValid = value;
              formValidCheck();
            }}
            validations={[
              {
                validate: (value) => value.trim().length === 6,
                errorText: "مقادیر وارد شده باید ۶ رقم باشد",
              },
            ]}
          />
        )}
        {situation === "inputPhoneNumber" && (
          <Input
            direction="left"
            className={styles.input}
            which="black"
            text="شماره تلفن همراه"
            type="text"
            important={true}
            submited={formSubmited}
            inputValue={(value) => (inputNumberValue = value)}
            isValid={(value) => {
              isInputNumberValid = value;
              formValidCheck();
            }}
            placeholder="09xxxxxxxxx"
            validations={[
              {
                validate: (value) =>
                  /^(?:0|98|\+98)?(9\d{9})$/.test(value) ||
                  /^[\u06F0-\u06F9]{11}/.test(value),
                errorText: "شماره تلفن وارد شده باید ۱۱ رقم باشد.",
              },
            ]}
          />
        )}
        <Button
          className={styles.button}
          onClick={submitClickHandler}
          which="confirm"
          text="ورود / ثبت نام"
        />
        <hr className={styles.dividerLine} />
        <div className={styles.socialMediaBox}>
          <p>شبکه های اجتماعی:</p>
          <SocialMediaRef color="#5085CF" />
        </div>
      </div>
      <img
        className={styles.img}
        src={
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617560"
        }
        alt=""
      />
    </div>
  );
};

export default Authentication;
