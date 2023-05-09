import { useEffect } from "react";
import styles from "./cart.module.css";
import { useGetFavProductListQuery } from "../../redux/services/product/productFavApi";
import { useGetProductCartListQuery } from "../../redux/services/product/productCartApi";

const Cart = () => {
  const { data: cartListData, error: cartListError } =
    useGetProductCartListQuery({
      token: localStorage.getItem("userToken"),
    });

  const { data: favListData, error: favListError } = useGetFavProductListQuery({
    token: localStorage.getItem("userToken"),
  });

  useEffect(() => {
    cartListError && console.log(cartListError);
    cartListData && console.log(cartListData);
    favListData && console.log(favListData);
    favListError && console.log(favListError);
  }, [cartListData, cartListError, favListData, favListError]);

  return (
    <div className={styles.page}>
      <h1>cart page</h1>
    </div>
  );
};

export default Cart;
