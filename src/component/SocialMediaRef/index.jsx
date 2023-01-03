import { TelegramSvg, FacebookSvg, InstagramSvg } from "../../assets/SvgInput";

import styles from "./socialMediaRef.module.css";

const SocialMediaRef = ({ className }) => {
  return (
    <div className={`${className} ${styles.socialMediaRef}`}>
      <InstagramSvg className={styles.svgIcon} color="white" />
      <FacebookSvg className={styles.svgIcon} color="white" />
      <TelegramSvg className={styles.svgIcon} color="white" />
    </div>
  );
};

export default SocialMediaRef;
