import styles from "./searchBox.module.css";

import { SearchSvg } from "../../assets/SvgInput";
import { useState } from "react";

const SearchBox = () => {
  const [enterValue, setEnterValue] = useState("");

  const searchClickHandler = () => {
    return enterValue;
  };

  const valueChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="محصول، برند و یا دسته موردنظر خود را جستجو کنید"
        className={styles.input}
        onChange={valueChangeHandler}
      />
      <SearchSvg
        color="#50C4CF"
        className={styles.searchIcon}
        onClick={searchClickHandler}
      />
    </div>
  );
};

export default SearchBox;
