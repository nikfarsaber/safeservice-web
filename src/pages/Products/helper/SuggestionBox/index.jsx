import styles from "./suggestionBox.module.css";

import {
  CategorySvg,
  BestSellSvg,
  OfferSvg,
} from "../../../../assets/SvgInput";

const SuggestionBox = () => {
  const suggestionList = [
    {
      name: "category",
      icon: <CategorySvg color="#50C4CF" />,
      text: "دسته بندی کالا",
    },
    {
      name: "bestSell",
      icon: <BestSellSvg color="#50C4CF" />,
      text: "پرفروش ترین‌ها",
    },
    { name: "Offer", icon: <OfferSvg color="#50C4CF" />, text: "تخفیف‌ها" },
  ];

  return (
    <ul className={styles.suggestionBox}>
      {suggestionList.map((element, index) => {
        return (
          <div key={`${element.name}_hr`} className={styles.suggestionBox}>
            {index !== 0 && <div className={styles.separatorLine}>|</div>}
            <li className={styles.suggestion} key={element.name}>
              {element.icon}
              <span>{element.text}</span>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default SuggestionBox;
