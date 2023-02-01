import styles from "./productCard.module.css";

import { HeartSvg, BasketSvg } from "../../assets/SvgInput";

const ProductCard = ({
  id,
  imgUrl,
  productName,
  finalPrice,
  withoutPrice,
  offerPercent,
}) => {
  const clickBasketHandler = () => {};

  const clickHeartHandler = () => {};

  return (
    <div>
      <img src={imgUrl} alt={productName} className={styles.productImg} />
      <p className={styles.productName}>{productName}</p>
      {withoutPrice && (
        <div className={styles.offerRow}>
          <p className={styles.initialPrice}>{withoutPrice}</p>
          <p className={styles.offerPercent}>{offerPercent}</p>
        </div>
      )}
      <div className={styles.productBottom}>
        <p className={styles.finalPrice}>{finalPrice}</p>
        <BasketSvg onClick={clickBasketHandler} color="#292D32" />
        <HeartSvg onClick={clickHeartHandler} color="#292D32" />
      </div>
    </div>
  );
};

export default ProductCard;
