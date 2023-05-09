import styles from "./product.module.css";
import Header from "../../layout/Header";
import { useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import { useEffect, useState } from "react";
import EasyAccess from "../Products/helper/EasyAccess";
import ProductCategory from "../../component/ProductCategory";
import HeadProductDetail from "./helper/HeadProductDetail";
import { useGetProductDetailQuery } from "../../redux/services/product/productDetailApi";
import BodyProductDetail from "./helper/BodyProductDetail";

const Product = () => {
  const params = useParams();

  const [headProductDetail, setHeadProductDetail] = useState("");
  const [bodyProductDetail, setBodyProductDetail] = useState("");
  const { data: productDetailData, isLoading } = useGetProductDetailQuery({
    id: params.productId,
  });

  useEffect(() => {
    if (productDetailData) {
      console.log(productDetailData);
      setHeadProductDetail({
        id: params.productId,
        persianName: productDetailData.persian_name,
        engName: productDetailData.eng_name,
        basePrice: productDetailData.base_price,
        configs: productDetailData.configs,
        mainImage: productDetailData.main_image,
        thumbnailMainImage: productDetailData.thumbnail_main_image,
        images: productDetailData.images,
        thumbnailImages: productDetailData.thumbnail_images,
        warranty: productDetailData.warranty,
      });
      setBodyProductDetail({
        id: params.productId,
        persianDescriptionFull: productDetailData.persian_description_full,
        spec: productDetailData.spec,
      });
    }
  }, [productDetailData]);

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <Header className={styles.header} />
        <div className={styles.hr}></div>
        <EasyAccess className={styles.easyAccess} />
        <div className={styles.productpageBody}>
          {productDetailData && (
            <ProductCategory
              categoryId={productDetailData.category_id}
              productName={productDetailData.persian_name}
              className={styles.productCategories}
            />
          )}
          {headProductDetail && (
            <HeadProductDetail productHeadDetail={headProductDetail} />
          )}
          {productDetailData && (
            <BodyProductDetail bodyProductDetail={bodyProductDetail} />
          )}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Product;
