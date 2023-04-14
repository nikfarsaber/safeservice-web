import { useEffect, useState } from "react";
import { fetchProduct } from "../../../../htmlRequest";
import ProductCard from "../../../../UI/ProductCard";
import styles from "./productsGrid.module.css";

const ProductsGrid = () => {
  const [productsData, setProductsData] = useState("");

  const getData = async () => {
    const data = await fetchProduct();
    data && setProductsData(data);
  };

  useEffect(() => {
    if (!productsData) {
      getData();
    }
    console.log(productsData);
  }, [productsData]);

  return (
    <div className={styles.productsGrid}>
      {productsData &&
        productsData.map((element) => {
          return (
            <ProductCard
              key={element.id}
              productName={element.name}
              finalPrice={element.finalPrice}
              withoutPrice={element.price}
              offerPercent={element.offers}
              imgUrl={element.url}
            />
          );
        })}
    </div>
  );
};

export default ProductsGrid;
