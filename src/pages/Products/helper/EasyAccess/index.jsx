import SearchBox from "../../../../UI/SearchBox";
import QuickAccess from "../QuickAccess";
import SuggestionBox from "../SuggestionBox";

import styles from "./easyAccess.module.css";

const EasyAccess = ({ className }) => {
  return (
    <div className={`${className} ${styles.easyAccess}`}>
      <SuggestionBox />
      <SearchBox />
      <QuickAccess />
    </div>
  );
};

export default EasyAccess;
