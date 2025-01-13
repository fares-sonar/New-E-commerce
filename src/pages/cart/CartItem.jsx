import { useContext } from "react";
import FormatCurrency from "../../components/FormatCurrency";
import { StoreCard } from "../../store/Store";
import { MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const CartItem = () => {
  const { cart, dispatch } = useContext(StoreCard);

  const increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "increase", id });
    }
  };
  const decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "decrease", id });
    }
  };
  return (
    <>
      <section className="w-full mt-24">
        <div>
          <ul className="flex justify-between items-center shadow-sm p-4">
            <li className="font-medium">Product</li>
            <li className="font-medium">Price</li>
            <li className="font-medium">Quantity</li>
            <li className="font-medium">Subtotal</li>
          </ul>

          {cart.map((product) => (
            <div
              key={product.id}
              className="flex relative justify-between items-center mt-8 shadow-sm p-4"
            >
              <img className="w-16 object-contain" src={product.image} alt="image" loading="lazy" />

              <h3>{FormatCurrency(product.price)}</h3>

              <div className="flex items-center gap-3">
                {product.quantity}
                <div className="flex flex-col">
                  <button onClick={() => increase(product.id)}>
                    <MdArrowDropUp />
                  </button>
                  <button onClick={() => decrease(product.id)}>
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </div>
              <h3>{FormatCurrency(product.price * product.quantity)}</h3>
              <button
                onClick={() => dispatch({ type: "remove", id: product.id })}
                className="absolute flex justify-center items-center cursor-pointer top-0 bg-red-500 rounded-full w-4 h-4 p-2"
              >
                <span className="text-white text-center text-sm">x</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default CartItem;
