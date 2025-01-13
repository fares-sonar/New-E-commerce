import { useContext } from "react";
import ProductsDetails from "./ProductsDetails";
import ProductSlider from "./ProductSlider";
import { StoreCard } from "../../store/Store";

const Products = () => {
  const { details, dataDetails } = useContext(StoreCard);

  // const detailsProduct = localStorage.getItem("detailsProduct")
  //   ? JSON.parse(localStorage.getItem("detailsProduct"))
  //   : [];

  // const [dataDetails, setDataDetails] = useState(detailsProduct);

  // const details = (product = data[2]) => {
  //   setDataDetails(product);
  // };

  // useEffect(() => {
  //   localStorage.setItem("detailsProduct", JSON.stringify(dataDetails));
  // }, [dataDetails]);

  return (
    <section className="container mx-auto pt-24">
      <ProductsDetails dataDetails={dataDetails} />
      <ProductSlider setDataDetails={details} />
    </section>
  );
};

export default Products;
