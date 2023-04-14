export const fetchProduct = async () => {
  const productsArray = fetch("http://localhost:3000/products")
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      } else {
        const data = await response.json();
        let errorMessage = "get products faild!";
        if (data?.detail) {
          throw new Error(data.detail);
        } else {
          throw new Error(errorMessage);
        }
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => alert(error.message));

  return productsArray;
};
