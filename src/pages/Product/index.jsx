import styles from "./product.module.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  return (
    <div className={styles.page}>
      <div>product {params.productId}</div>
    </div>
  );
};

export default Product;
