import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserDetailQuery } from "../../../../redux/services/profileApi";

import styles from "./profileDetail.module.css";

import Input from "../../../../UI/Input";
import { EditIcon } from "../../../../assets/SvgInput";
import Button from "../../../../UI/Button";

let [
  inputPhoneNumberValue,
  inputFirstNameValue,
  inputLastNameValue,
  inputGenderValue,
  inputNatinalCodeValue,
  inputBirthDayDateValue,
  inputStateValue,
  inputCityValue,
  inputAdderessValue,
] = [];

const ProfileDetail = () => {
  let [isInputPhoneNumberValid, isInputFirstNameValid, isInputLastNameValid] = [
    false,
    false,
    false,
  ];

  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);
  const [profileDetailObject, setProfileDetailObject] = useState({
    phoneNumberValue: "",
    firstNameValue: "",
    lastNameValue: "",
    genderValue: "",
    natinalCodeValue: "",
    birthDayDateValue: "",
    stateValue: "",
    cityValue: "",
    adderessValue: "",
  });
  const profileShortDetail = useSelector((state) => state.user.userShortDetile);

  let isFormValid = false;

  const { data: profileData, isLoading } = useGetUserDetailQuery({
    token: localStorage.getItem("userToken"),
    userId: profileShortDetail._id,
  });

  useEffect(() => {
    !!isLoading && isLoading === isInputEnabled && setIsInputEnabled(false);
    !isLoading && isLoading === isInputEnabled && setIsInputEnabled(true);
    profileData &&
      setProfileDetailObject({
        phoneNumberValue: profileData.phone || "",
        firstNameValue: profileData.name || "",
        lastNameValue: profileData.family || "",
        genderValue: profileData.gender || "",
        natinalCodeValue: profileData.nationalcode || "",
        birthDayDateValue: profileData.birthdata || "",
        stateValue: profileData.province || "",
        cityValue: profileData.city || "",
        adderessValue: profileData.address || "",
      });
  }, [profileData, isLoading, isInputEnabled]);

  const formValidCheck = () => {
    isFormValid =
      isInputFirstNameValid && isInputPhoneNumberValid && isInputLastNameValid;
  };

  const submitClickHandler = () => {
    !formSubmited && setFormSubmited(true);
    formValidCheck();
    if (isFormValid) {
      console.log(profileDetailObject);
      console.log(
        inputPhoneNumberValue,
        inputFirstNameValue,
        inputLastNameValue,
        inputGenderValue,
        inputNatinalCodeValue,
        inputBirthDayDateValue,
        inputStateValue,
        inputCityValue,
        inputAdderessValue
      );
    }
  };

  return (
    <div className={styles.profileDetail}>
      <h2>
        <EditIcon color="#5085CF" className={styles.headerIcon} />
        اطلاعات شخصی
      </h2>
      <div className={styles.hr}></div>
      <div className={styles.gridBox}>
        <Input
          className={styles.input}
          value={profileDetailObject.firstNameValue}
          which="black"
          type="text"
          text="نام"
          important={true}
          submited={formSubmited}
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputFirstNameValue = value)}
          isValid={(value) => {
            isInputFirstNameValid = value;
            formValidCheck();
          }}
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
          value={profileDetailObject.lastNameValue}
          which="black"
          type="text"
          text="نام خانوادگی"
          important={true}
          submited={formSubmited}
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputLastNameValue = value)}
          isValid={(value) => {
            isInputLastNameValid = value;
            formValidCheck();
          }}
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
          type="select"
          selectOptions={["مرد", "زن"]}
          text="جنسیت"
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputGenderValue = value)}
        />
        <Input
          className={styles.input}
          value={profileDetailObject.natinalCodeValue}
          which="black"
          type="text"
          text="کدملی"
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputNatinalCodeValue = value)}
        />
        <Input
          direction="left"
          className={styles.input}
          value={profileDetailObject.phoneNumberValue}
          which="black"
          text="شماره تلفن همراه"
          type="text"
          important={true}
          submited={formSubmited}
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputPhoneNumberValue = value)}
          isValid={(value) => {
            isInputPhoneNumberValid = value;
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
        <Input
          className={styles.input}
          value={profileDetailObject.birthDayDateValue}
          which="black"
          type="date"
          text="تاریخ تولد"
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputBirthDayDateValue = value)}
        />
        <Input
          className={styles.input}
          value={profileDetailObject.stateValue}
          which="black"
          type="text"
          text="استان محل سکونت"
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputStateValue = value)}
        />
        <Input
          className={styles.input}
          value={profileDetailObject.cityValue}
          which="black"
          type="text"
          text="شهر محل سکونت"
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputCityValue = value)}
        />
        <Input
          className={styles.input}
          value={profileDetailObject.adderessValue}
          which="black"
          type="text"
          text="آدرس"
          inputEnabled={isInputEnabled}
          inputValue={(value) => (inputAdderessValue = value)}
        />
      </div>
      <Button
        className={styles.editButton}
        which="confirm"
        text="ثبت تغییرات"
        onClick={submitClickHandler}
      />
    </div>
  );
};

export default ProfileDetail;
