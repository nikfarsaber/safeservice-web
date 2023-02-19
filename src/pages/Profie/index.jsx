import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailQuery } from "../../redux/services/profileApi";

import { logOut } from "../../redux/user/usersSlice";

import styles from "./profile.module.css";
import Header from "../../layout/Header";
import Button from "../../UI/Button";

// const url = "https://shop-api.safeservice.ir";

const Profile = () => {
  const dispatch = useDispatch();
  const profileShortDetail = useSelector((state) => state.user.userShortDetile);
  const { data: profileData } = useGetUserDetailQuery({
    token: localStorage.getItem("userToken"),
    userId: profileShortDetail._id,
  });

  useEffect(() => {
    profileShortDetail &&
      console.log(profileShortDetail, profileShortDetail._id);
    profileData && console.log(profileData);
  }, [profileShortDetail, profileData]);

  const logOutClickHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(logOut());
  };

  return (
    <div>
      <Header />
      <p>profile</p>
      <div className={styles.article}>
        <div className={styles.optionSide}></div>
        <div className={styles.detailSide}></div>
      </div>
      <Button
        which="register"
        text="خروج از حساب کاربری"
        onClick={logOutClickHandler}
      />
    </div>
  );
};

export default Profile;
