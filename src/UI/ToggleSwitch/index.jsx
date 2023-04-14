import styles from "./toggleSwitch.module.css";

const ToggleSwitch = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox"></input>
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;
