import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { StoreCard } from "../../store/Store";
import { useContext } from "react";
import FormatCurrency from "../../components/FormatCurrency";

function Product() {
  const { filter, dispatch, truncateText } = useContext(StoreCard);

  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8 md:p-0 p-4">
      {filter.map((products) => {
        return (
          <div className="" key={products.id}>
            <div className="group shadow relative p-4">
              <img
                width={"190"}
                height={"180"}
                className=" w-[190px] h-[180px] mx-auto"
                src={products.image}
                alt="product"
                loading="lazy"
              />
              <div className="absolute top-4 right-4">
                <span>
                  <CiHeart className="w-[24px] h-[24px]" />
                </span>
                <span>
                  <IoEyeOutline className="w-[24px] h-[24px]" />
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch({ products: products, type: "add" });
                }}
                className="text-center border w-full bg-black text-white py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Add To Card
              </button>
            </div>
            <div className="mt-4">
              <p className="text-base font-medium">
                {truncateText(products.title, 20)}
              </p>
              <h3 className="text-lightRed my-2">
                {FormatCurrency(products.price)}{" "}
                <span className="line-through ml-4 text-base text-gray-300">
                  {Math.floor(products.price * 1.5)}
                </span>
              </h3>
              <div className="flex items-center gap-1">
                {[...Array(Math.ceil(products.rating.rate))].map((_, index) => (
                  <FaStar key={index} className="text-orange-400" />
                ))}
                <span className="ml-3">({products.rating.count})</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
