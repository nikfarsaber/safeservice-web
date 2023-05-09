import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useGetCategoriesListQuery } from "../../redux/services/product/productCategoryApi";

const ProductCategory = ({ categoryId, productName = "", className }) => {
  const [category, setCategory] = useState("loading ...");
  console.log();
  const { data: categoriesList, isLoading } = useGetCategoriesListQuery({});

  const navigat = useNavigate();

  const clickProductsHandler = () => {
    navigat("/products", { replace: false });
  };

  useEffect(() => {
    if (categoriesList) {
      const categoryPersianName = categoriesList.find(
        (element) => element.id == categoryId
      ).persian_name;
      setCategory(categoryPersianName);
    }
  }, [categoriesList]);

  return (
    <div className={className}>
      <span onClick={clickProductsHandler}>محصولات</span>
      <span>{" > "}</span>
      <span>{category}</span>
      <span>{" > "}</span>
      <span>{productName}</span>
    </div>
  );
};

export default ProductCategory;
