import Input from "../../UI/Input";
import Button from "../../UI/Button";
import SocialMediaRef from "../../component/SocialMediaRef";
import { useNavigate } from "react-router-dom";

import styles from "./authentication.module.css";

import logo from "../../assets/pngFolder/safeservice-logo.png";
import { useState } from "react";

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

  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmited, setFormSubmited] = useState(false);
  const [situation, setSituation] = useState("inputPhoneNumber");

  let isFormValid = false;

  const submitClickHandler = () => {
    setFormSubmited(true);
    formValidCheck();
    if (isFormValid) {
      console.log("go to fetch");
      if (situation == "inputPhoneNumber") {
        fetch(`${url}/auth/request_login?phone=${inputNumberValue}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(async (response) => {
            if (response.ok) {
              return response;
            } else {
              const data = await response.json();
              let errorMessage = "Authentication faild!";
              if (data && data.detail) {
                throw new Error(data.detail);
              } else {
                throw new Error(errorMessage);
              }
            }
          })
          .then(async (data) => {
            console.log(await data.json());
            setPhoneNumber(inputNumberValue);
            setSituation("signIn");
            setFormSubmited(false);
            isFormValid = false;
          })
          .catch((error) => {
            if (error.message == "User not found with given phone number") {
              fetch(`${url}/auth/request_register?phone=${inputNumberValue}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then(async (response) => {
                  if (response.ok) {
                    return response.json();
                  } else {
                    const data = await response.json();
                    let errorMessage = "Authentication faild!";
                    if (data && data.detail) {
                      throw new Error(data.detail);
                    } else {
                      throw new Error(errorMessage);
                    }
                  }
                })
                .then(async () => {
                  setPhoneNumber(inputNumberValue);
                  setSituation("signUp");
                  setFormSubmited(false);
                  isFormValid = false;
                })
                .catch((error) => {
                  alert(error.message);
                });
            } else {
              alert(error.message);
            }
          });
      } else if (situation == "signUp") {
        console.log("sign up fetch");
        fetch(
          `${url}/auth/register_w_otp?phone=${phoneNumber}&name=${inputFirstNameValue}&family=${inputLastNameValue}&otp_code=${inputPasswordValue}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(async (response) => {
            if (response.ok) {
              return response.json();
            } else {
              const data = await response.json();
              let errorMessage = "Authentication faild!";
              if (data && data.detail) {
                throw new Error(data.detail);
              } else {
                throw new Error(errorMessage);
              }
            }
          })
          .then(async (data) => {
            console.log(data.token);
            data.token && localStorage.setItem("userToken", data.token);
            navigate("/Home", { replace: true });
          })
          .catch((error) => alert(error.message));
        setFormSubmited(false);
        isFormValid = false;
      } else if (situation == "signIn") {
        console.log("sign in fetch");
        fetch(
          `${url}/auth/login_w_otp?phone=${phoneNumber}&otp_code=${inputPasswordValue}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(async (response) => {
            if (response.ok) {
              return response.json();
            } else {
              const data = await response.json();
              let errorMessage = "Authentication faild!";
              if (data && data.detail) {
                throw new Error(data.detail);
              } else {
                throw new Error(errorMessage);
              }
            }
          })
          .then(async (data) => {
            console.log(data.token);
            data.token && localStorage.setItem("userToken", data.token);
            navigate("/Home", { replace: true });
          })
          .catch((error) => alert(error.message));
        setFormSubmited(false);
        isFormValid = false;
      }
    }
  };

  const formValidCheck = () => {
    if (situation == "inputPhoneNumber") {
      isFormValid = isInputNumberValid;
    } else if (situation == "signUp") {
      isFormValid =
        isInputFirstNameValid && isInputLastNameValid && isInputPasswordValid;
    } else if (situation == "signIn") {
      isFormValid = isInputPasswordValid;
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.informationBox}>
        <img src={logo} alt="safeservice logo" className={styles.logo} />
        {situation == "signUp" && (
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
        {(situation == "signIn" || situation == "signUp") && (
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
                validate: (value) => value.trim().length == 6,
                errorText: "مقادیر وارد شده باید ۶ رقم باشد",
              },
            ]}
          />
        )}
        {situation == "inputPhoneNumber" && (
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
