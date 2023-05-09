import { useEffect, useState } from "react";
import { BASE_IMAGE_URL } from "../../../../config";
import styles from "./headProductDetail.module.css";
import { BasketSvg, HeartSvg, WarrantyIcon } from "../../../../assets/SvgInput";
import { colorList } from "../configsHelper";

import {
  useGetFavStatusProductQuery,
  useSetFavProductMutation,
} from "../../../../redux/services/product/productFavApi";
import { useSetAddToCartMutation } from "../../../../redux/services/product/productCartApi";

const HeadProductDetail = ({ productHeadDetail }) => {
  // console.log(productHeadDetail);

  const [chosenConfig, setChosenConfig] = useState(0);
  const [showImageIndex, setShowImageIndex] = useState(0);

  const { data: productFavData, isLoading } = useGetFavStatusProductQuery({
    token: localStorage.getItem("userToken"),
    productId: productHeadDetail.id,
  });

  const [setProductFavTrigger, { data: setFavProduct }] =
    useSetFavProductMutation();

  const [
    setProductAddToCartTrigger,
    { data: setAddToCart, error: productAddError },
  ] = useSetAddToCartMutation();

  const imageList = [productHeadDetail.mainImage].concat(
    productHeadDetail.images
  );

  const thumbnailList = [
    productHeadDetail.thumbnailMainImage || productHeadDetail.mainImage,
  ].concat(productHeadDetail.thumbnailImages || productHeadDetail.images);

  const clickThumbnailHandler = (event) => {
    setShowImageIndex(
      thumbnailList.indexOf(
        event.target.nodeName === "IMG"
          ? event.target.parentElement.id
          : event.target.id
      )
    );
  };

  const configClickHandler = (event) => {
    const configIndex =
      event.target.classList[0] === "clickableDiv"
        ? event.target.id.substring(12)
        : event.target.parentElement.id.substring(12);
    configIndex !== chosenConfig && setChosenConfig(configIndex);
  };

  const clickFavHandler = () => {
    console.log("fav");
    setProductFavTrigger({
      token: localStorage.getItem("userToken"),
      productId: productHeadDetail.id,
    });
  };

  const addToCartClickHandler = () => {
    setProductAddToCartTrigger({
      token: localStorage.getItem("userToken"),
      productId: productHeadDetail.id,
      productConfig: productHeadDetail.configs[chosenConfig].name,
      count: 1,
    });
  };

  useEffect(() => {
    productAddError && console.log(productAddError);
    setAddToCart && console.log(setAddToCart);
  }, [productAddError, setAddToCart]);

  return (
    <div className={styles.headProductDetail}>
      <div className={styles.productImages}>
        <img
          src={`${BASE_IMAGE_URL}/${imageList[showImageIndex]}`}
          className={styles.showImage}
        />
        <div className={styles.thumbnailImages}>
          {thumbnailList.map((element, index) => (
            <div
              key={element}
              onClick={clickThumbnailHandler}
              id={element}
              className={`${
                index == showImageIndex ? styles.activeThumbnail : ""
              } ${styles.thumbnailBox}`}
            >
              <img
                src={`${BASE_IMAGE_URL}/${element}`}
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.productDetail}>
        <div className={styles.productTitle}>
          <div className={styles.productPersianName}>
            {productHeadDetail.persianName}
          </div>
          <div className={styles.productEnglishName}>
            {productHeadDetail.engName}
          </div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.configChoose}>
          <p>رنگ : </p>
          <div className={styles.configsBox}>
            {productHeadDetail.configs.map((element, index) => {
              const colorObject = colorList.find(
                (listElement) => listElement.name == element.name
              );
              return (
                <div
                  className={`clickableDiv ${
                    index == chosenConfig ? `${styles.activeConfig}` : ""
                  } ${styles.config}`}
                  key={element.name}
                  id={`configIndex_${index}`}
                  onClick={configClickHandler}
                >
                  <div
                    className={styles.configColor}
                    style={{ backgroundColor: `${colorObject.color}` }}
                  ></div>
                  <p className={styles.configText}>{colorObject.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.priceBox}>
          <p className={styles.priceText}>قیمت کالا :</p>
          <p className={styles.configPrice}>
            {new Intl.NumberFormat()
              .format(
                productHeadDetail.configs[chosenConfig].price_diff +
                  productHeadDetail.basePrice
              )
              .toString()
              .replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
            تومان
          </p>
        </div>
        <div className={styles.waranty}>
          <WarrantyIcon color={"#CF5B50"} className={styles.warrantyIcon} />
          <div className={styles.warrantyDetail}>
            <p>
              نوع گارانتی:
              <span className={styles.warrantyName}>
                {productHeadDetail.warranty}
              </span>
            </p>
            <p>۱۸ ماه گارانتی</p>
            <p>همراه با کد ریجستری</p>
          </div>
        </div>
        <div className={styles.access}>
          <div className={styles.heartBox}>
            <HeartSvg
              color={productFavData?.is_fav ? "#F24547" : "#292D32"}
              className={styles.heartIcon}
              onClick={clickFavHandler}
              fill={productFavData?.is_fav ? "#F24547" : "none"}
            />
          </div>
          <div
            onClick={addToCartClickHandler}
            className={styles.purchaseOptions}
          >
            <BasketSvg color="#070707" className={styles.basketIcon} />
            <p>افزودن به سبد خرید</p>
            <p>{setAddToCart}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadProductDetail;
