import TwoRange from "../../../../UI/TwoRange";
import ToggleSwitch from "../../../../UI/ToggleSwitch";
import styles from "./filtersBox.module.css";

const FiltersBox = ({ filtersDetails }) => {
  if (!filtersDetails) return;

  return (
    <div className={styles.filtersBox}>
      <h4>فیلترها</h4>
      {filtersDetails.map((element) => {
        if (element.type === "selection") {
          return (
            <div key={element.id} className={styles.filter}>
              <label htmlFor={`inputFilter_${element.name}`}>
                {element.text}
              </label>
              <select id={`inputFilter_${element.name}`} name={element.name}>
                {element.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          );
        } else if (element.type === "hr") {
          return <div key={element.id} className={styles.hr}></div>;
        } else if (element.type === "toggle") {
          return (
            <div
              key={element.id}
              className={`${styles.filter} ${styles.toggleFilter}`}
            >
              <label
                htmlFor={`inputFilter_${element.name}`}
                className={styles.toggleLabel}
              >
                {element.text}
              </label>
              <ToggleSwitch />
            </div>
          );
        } else if ((element.type = "twoRange")) {
          return (
            <div className={styles.filter} key={element.id}>
              <TwoRange min="0" max="100" />
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default FiltersBox;
