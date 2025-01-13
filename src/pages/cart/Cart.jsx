import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem  from "./CartItem";
import { totalPrice } from "../../store/CartReducer";
import { StoreCard } from "../../store/Store";
import FormatCurrency from "../../components/FormatCurrency";
import Button from "../../components/Button";

const Cart = () => {
  const { cart } = useContext(StoreCard);

  return (
    <>
      <section className="container mx-auto lg:px-0 px-4 pt-16">
        <div className="my-28">
          <CartItem />

          <div className="flex flex-wrap justify-between items-center mt-8 space-y-2">
            <button className="border-black border-2 py-3 px-8">
              <Link to={"/"}>Return To Shop</Link>
            </button>
            <button className="border-black border-2 py-3 px-8">
              Update Cart
            </button>
          </div>
          <div className=" flex flex-wrap justify-between items-start mt-14 space-y-4">
            <div className="md:space-x-8 space-y-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="py-4 px-8 rounded-[4px] outline-none border"
              />
              <Button text={"Apply Coupon"} />
            </div>
            <div className="p-4 border w-[500px] ">
              <h2>Cart Total</h2>
              <h3 className="flex justify-between items-center border-b pb-2 mt-4">
                Subtotal: <span>{FormatCurrency(totalPrice(cart))}</span>
              </h3>
              <h3 className="flex justify-between items-center border-b pb-2 mt-4">
                Shopping: <span>Free</span>
              </h3>
              <h3 className="flex justify-between items-center  pb-2 mt-4">
                Total: <span>{FormatCurrency(totalPrice(cart))}</span>
              </h3>
              <div className="mt-4 text-center">
                <Link to={"/check-out"}>
                  <Button text={"Process to checkout"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
