import { useState, useEffect } from "react";
import ProductsDetails from "./ProductsDetails";
import ProductSlider from "./ProductSlider";

const Products = () => {
  const detailsProduct = localStorage.getItem("detailsProduct")
    ? JSON.parse(localStorage.getItem("detailsProduct"))
    : [];

  const [dataDetails, setDataDetails] = useState(detailsProduct);

  const details = (product) => {
    setDataDetails(product);
  };

  useEffect(() => {
    localStorage.setItem("detailsProduct", JSON.stringify(dataDetails));
  }, [dataDetails]);

  return (
    <section className="container mx-auto pt-24">
      <ProductsDetails dataDetails={dataDetails} />
      <ProductSlider setDataDetails={details} />
    </section>
  );
};

export default Products;
