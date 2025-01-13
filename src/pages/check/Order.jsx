import { useContext, useState } from "react";
import { StoreCard } from "../../store/Store";
import FormatCurrency from "../../components/FormatCurrency";
import { totalPrice } from "../../store/CartReducer";
import Button from "../../components/Button";

function Order() {
  const [couponCode, setCouponCode] = useState("");

  const { cart } = useContext(StoreCard);

  const subtotal = FormatCurrency(totalPrice(cart));
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b"
          >
            <div className="flex items-center space-x-4">
              <img src={item.image} className="w-8 h-8 text-gray-600" />
              <h3 className="font-medium">{item.title}</h3>
            </div>
            <span className="font-semibold">
              {FormatCurrency(item.price * item.quantity)}
            </span>
          </div>
        ))}

        <div className="flex justify-between py-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold">${subtotal}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <div className="flex justify-between py-2 border-t border-b">
          <span className="font-medium">Total:</span>
          <span className="font-bold text-lg">${total}</span>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between space-x-4">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="bank"
                name="paymentMethod"
                value="bank"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="font-medium">Bank</span>
            </div>
            
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="cash" className="font-medium">
              Cash on delivery
            </label>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="md:flex-1 rounded-[4px] bg-gray-100 py-4 px-8 shadow-sm outline-none"
          />

          <Button text={"Apply Coupon"} />
        </div>

        <Button text={"Place Order"} />
      </div>
    </div>
  );
}

export default Order;
