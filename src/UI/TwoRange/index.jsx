import { useState, useEffect } from "react";

import styles from "./twoRange.module.css";

const TwoRange = ({ min, max }) => {
  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(avg);
  const [maxVal, setMaxVal] = useState(avg);

  const thumbsize = 10;
  const width = 1000;
  const minWidth =
    thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const cssStyles = {
    min: {
      width: minWidth,
      right: 0,
      direction: "ltr",
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      right: minWidth,
      direction: "ltr",
    },
  };

  useEffect(() => {
    setAvg((maxVal + minVal) / 2);
  }, [minVal, maxVal]);

  return (
    <div
      style={{ direction: "ltr" }}
      className={styles.min_max_slider}
      // data-legendnum="2"
      // data-rangemin={min}
      // data-rangemax={max}
      // data-thumbsize={thumbsize}
      // data-rangewidth={width}
    >
      <input
        id="min"
        className={styles.min}
        style={cssStyles.min}
        name="min"
        type="range"
        step="1"
        min={min}
        max={avg}
        value={minVal}
        onChange={({ target }) => setMinVal(Number(target.value))}
      />
      <input
        id="max"
        className={styles.max}
        style={cssStyles.max}
        name="max"
        type="range"
        step="1"
        min={avg}
        max={max}
        value={maxVal}
        onChange={({ target }) => setMaxVal(Number(target.value))}
      />
    </div>
  );
};

export default TwoRange;
