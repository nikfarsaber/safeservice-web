import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import EasyAccess from "./helper/EasyAccess";
import FiltersBox from "./helper/FiltersBox";
import SortBox from "./helper/SortBox";
import ProductsGrid from "./helper/ProductsGrid";

import styles from "./products.module.css";

import { filterList } from "./helper/filterList";

const Products = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <Header className={styles.header} />
        <div className={styles.hr}></div>
        <EasyAccess className={styles.easyAccess} />
        <div className={styles.productpageBody}>
          <div className={styles.rightSide}>
            <div className={styles.productsCategory}>
              محصولات/ تلفن همراه/ آیفون
            </div>
            <FiltersBox filtersDetails={filterList} />
          </div>
          <div className={styles.leftSide}>
            <SortBox />
            <div className={styles.hr}></div>
            <ProductsGrid />
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Products;
