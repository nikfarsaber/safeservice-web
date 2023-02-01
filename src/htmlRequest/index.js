export const fetchProduct = async () => {
  fetch("http://localhost:3000/products")
    .then(async (response) => {
      if (response.ok) {
        return response.json();
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
    .then(async (data) => {
      return data;
    })
    .catch((error) => alert(error.message));
};
