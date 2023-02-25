import { TelegramSvg, LinkedInIcon, InstagramSvg } from "../../assets/SvgInput";

import styles from "./socialMediaRef.module.css";

const SocialMediaRef = ({ className, color = "white" }) => {
  const instagramClickHandler = () => {
    window.location.href =
      "https://instagram.com/safeservice.ir?igshid=MDM4ZDc5MmU=";
  };

  const linkedInClickHandler = () => {
    window.location.href = "https://www.linkedin.com/company/safeservice/";
  };

  return (
    <div className={`${className} ${styles.socialMediaRef}`}>
      <InstagramSvg
        className={styles.svgIcon}
        color={color}
        onClick={instagramClickHandler}
      />
      <LinkedInIcon
        className={styles.svgIcon}
        color={color}
        onClick={linkedInClickHandler}
      />
    </div>
  );
};

export default SocialMediaRef;
