/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import FormatCurrency from "../../components/FormatCurrency";

const ProductsDetails = ({ dataDetails }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div className="">
          <img
            className="md:w-[400px] w-[250px]"
            src={dataDetails.image}
            alt="image"
          />
        </div>
        <div className="max-w-lg md:max-w-none space-y-4">
          <h3 className="uppercase text-2xl font-medium ">
            {dataDetails.category}
          </h3>
          <h2 className="md:text-6xl sm:text-3xl">{dataDetails.title}</h2>
          <div className="flex items-center gap-1">
            {[...Array(Math.ceil(dataDetails.rating.rate))].map((_, index) => (
              <FaStar key={index} className="text-orange-400" />
            ))}
            <span className="ml-3">({dataDetails.rating.count})</span>
          </div>

          <h3 className="text-2xl">{FormatCurrency(dataDetails.price)}</h3>
          <p className="text-2xl text-gray-400 capitalize leading-10">
            {dataDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
