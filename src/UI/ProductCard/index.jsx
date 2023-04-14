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
    <div className={styles.productCard}>
      <div className={styles.topProductCard}>
        <img src={imgUrl} alt={productName} className={styles.productImg} />
        <p className={styles.productName}>{productName}</p>
        {withoutPrice && offerPercent && (
          <div className={styles.offerRow}>
            <p className={styles.initialPrice}>
              {new Intl.NumberFormat()
                .format(withoutPrice)
                .toString()
                .replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
              تومان
            </p>
            <p className={styles.offerPercent}>
              {offerPercent
                .toString()
                .replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            </p>
          </div>
        )}
      </div>
      <div className={styles.productBottom}>
        <div className={styles.quickAccess}>
          <HeartSvg onClick={clickHeartHandler} color="#292D32" />
          <BasketSvg onClick={clickBasketHandler} color="#292D32" />
        </div>
        {finalPrice && (
          <p className={styles.finalPrice}>
            {new Intl.NumberFormat()
              .format(finalPrice)
              .toString()
              .replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
            تومان
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
