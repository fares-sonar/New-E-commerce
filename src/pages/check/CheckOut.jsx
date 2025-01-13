import BillingDetails from "./BillingDetails";
import Order from "./Order";
const CheckOut = () => {
  return (
    <div>
      <section className=" container mx-auto lg:px-0 px-4 py-12 sm:px-6 ">
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Details Form */}
            <BillingDetails />

            {/* Order Summary */}
            <Order />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
