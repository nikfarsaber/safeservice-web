import { useEffect, useState } from "react";
import ProductCard from "../../../../UI/ProductCard";
import styles from "./productsGrid.module.css";
import { useGetProductsQuery } from "../../../../redux/services/product/productDetailApi";

const ProductsGrid = () => {
  const { data: productsData, isLoading } = useGetProductsQuery({
    pageSize: 6,
    pageNumber: 1,
  });

  const getData = async () => {};

  useEffect(() => {
    console.log(productsData);
  }, [productsData]);

  return (
    <div className={styles.productsGrid}>
      {isLoading && <p>Loading ...</p>}
      {productsData &&
        productsData.map((element) => {
          return (
            <ProductCard
              key={element.id}
              id={element.id}
              productName={element.persian_name}
              finalPrice={element.base_price}
              withoutPrice={element.price}
              offerPercent={element.offers}
              imgUrl={
                element.thumbnail_main_image &&
                `https://safeservice.storage.iran.liara.space/${element.thumbnail_main_image}`
              }
            />
          );
        })}
    </div>
  );
};

export default ProductsGrid;
