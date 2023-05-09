import { useState } from "react";
import styles from "./bodyProductDetail.module.css";
import { BookIcon, CommentsIcon, SearchSvg } from "../../../../assets/SvgInput";

const BodyProductDetail = ({ bodyProductDetail }) => {
  const [situation, setSituation] = useState("review");
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const clickOptionHandler = (event) => {
    let target = event.target;
    while (target != null) {
      if (target.classList.contains(styles.optionButton)) {
        break;
      }
      target = target.parentElement;
    }
    target && setSituation(target.title);
  };

  return (
    <div className={styles.ProductBody}>
      <div className={styles.optionBox}>
        <button
          onClick={clickOptionHandler}
          className={styles.optionButton}
          title="review"
        >
          <SearchSvg color={"#5085CF"} className={styles.buttonIcon} />
          <p>نقد و بررسی</p>
        </button>
        <button
          onClick={clickOptionHandler}
          className={styles.optionButton}
          title="comments"
        >
          <CommentsIcon color={"#5085CF"} className={styles.buttonIcon} />
          <p>نظرات</p>
        </button>
        <button
          onClick={clickOptionHandler}
          className={styles.optionButton}
          title="productSpecifications"
        >
          <BookIcon color={"#5085CF"} className={styles.buttonIcon} />
          <p>مشخصات محصول</p>
        </button>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.detailBodyBox}>
        {situation === "comments" && <p>comments</p>}
        {situation === "review" && (
          <div className={styles.reviewBox}>
            <div
              className={!showFullText ? styles.truncatedText : ""}
              dangerouslySetInnerHTML={{
                __html: bodyProductDetail.persianDescriptionFull,
              }}
            ></div>
            {!showFullText && (
              <span onClick={toggleText} className={styles.showMore}>
                نمایش بیش‌تر
              </span>
            )}
          </div>
        )}
        {situation === "productSpecifications" && (
          <div className={styles.specBox}>
            {bodyProductDetail.spec.map((element) => (
              <div key={element.name} className={styles.specRow}>
                <div className={styles.specName}>{element.name}</div>
                <div className={styles.specValue}>{element.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyProductDetail;
