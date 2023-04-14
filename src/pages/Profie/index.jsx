import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { logOut } from "../../redux/user/usersSlice";

import coverImage from "../../assets/pngFolder/coverPhoto.png";
import blankedProfile from "../../assets/pngFolder/profileBlank.png";

import styles from "./profile.module.css";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import {
  BasketSvg,
  EditIcon,
  LogOutIcon,
  MyDeviceIcon,
} from "../../assets/SvgInput";
import ProfileDetail from "./helper/ProfileDetail";
import MyDevice from "./helper/MyDevice";
import MyPurchases from "./helper/MyPurchases";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [situation, setSituation] = useState("");

  const dispatch = useDispatch();
  const profileShortDetail = useSelector((state) => state.user.userShortDetile);

  useEffect(() => {
    if (situation !== params.situation) {
      setSituation(params.situation || "");
    }
  }, [params, situation]);

  const checkClickHandler = (element) => {
    console.log(element);
    if (element === "profile-list-option-personal-detail") {
      navigate(`/profile`, { replace: false });
    } else if (element === "profile-list-option-log-out") {
      localStorage.removeItem("userToken");
      dispatch(logOut());
      navigate(`/home`, { replace: true });
    } else {
      navigate(`/profile/${element}`, { replace: false });
    }
  };

  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <div className={styles.article}>
        <div className={styles.coverImageBox}>
          <img src={coverImage} alt="cover" className={styles.coverImage} />
          <div className={styles.blurBox}></div>
        </div>
        <div className={styles.profileMainBox}>
          <div className={styles.optionSide}>
            <div className={styles.shortReview}>
              <div className={styles.profileImage}>
                <img
                  src={blankedProfile}
                  alt="blanked profile"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.profileName}>
                {profileShortDetail.name + " " + profileShortDetail.family}
              </div>
            </div>
            <hr />
            <ul className={styles.optionList}>
              <li
                className={styles.optionsItem}
                onClick={() =>
                  checkClickHandler("profile-list-option-personal-detail")
                }
                id="profile-list-option-personal-detail"
              >
                <EditIcon color="#5085CF" className={styles.optionIcon} />
                <p className={styles.optionItemText}>اطلاعات شخصی</p>
              </li>
              <li
                className={styles.optionsItem}
                onClick={() =>
                  checkClickHandler("profile-list-option-my-device")
                }
                id="profile-list-option-my-device"
              >
                <MyDeviceIcon color="#5085CF" className={styles.optionIcon} />
                <p className={styles.optionItemText}>دستگاه‌های من</p>
              </li>
              <li
                className={styles.optionsItem}
                onClick={() =>
                  checkClickHandler("profile-list-option-my-purchases")
                }
              >
                <BasketSvg color="#5085CF" className={styles.optionIcon} />
                <p className={styles.optionItemText}>خریدهای من</p>
              </li>
              <li
                className={styles.optionsItem}
                onClick={() => checkClickHandler("profile-list-option-log-out")}
              >
                <LogOutIcon color="#5085CF" className={styles.optionIcon} />
                <p className={styles.optionItemText}>خروج</p>
              </li>
            </ul>
          </div>
          <div className={styles.detailSection}>
            {situation === "" && profileShortDetail && <ProfileDetail />}
            {situation === "profile-list-option-my-device" && <MyDevice />}
            {situation === "profile-list-option-my-purchases" && (
              <MyPurchases />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
