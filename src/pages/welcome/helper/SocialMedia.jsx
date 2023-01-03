import SocialMediaRef from "../../../component/SocialMediaRef";

import styles from "./socialMedia.module.css";

const SocialMedia = ({ className }) => {
  return (
    <div className={`${className} ${styles.socialMediaBox}`}>
      <div className={styles.line}></div>
      <SocialMediaRef className={styles.rotatedSocial} />
      <div className={styles.line}></div>
    </div>
  );
};

export default SocialMedia;
