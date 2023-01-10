import { TelegramSvg, FacebookSvg, InstagramSvg } from "../../assets/SvgInput";

import styles from "./socialMediaRef.module.css";

const SocialMediaRef = ({ className, color = "white" }) => {
  return (
    <div className={`${className} ${styles.socialMediaRef}`}>
      <InstagramSvg className={styles.svgIcon} color={color} />
      <FacebookSvg className={styles.svgIcon} color={color} />
      <TelegramSvg className={styles.svgIcon} color={color} />
    </div>
  );
};

export default SocialMediaRef;
