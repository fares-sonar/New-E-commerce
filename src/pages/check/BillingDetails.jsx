import { useState } from "react";
function BillingDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    town: "",
    phone: "",
    email: "",
    saveInfo: false,
    paymentMethod: "bank",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Billing Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md  bg-gray-100 outline-none border-b-2 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md   bg-gray-100 outline-none border-b-2 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            required
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md   bg-gray-100 outline-none border-b-2 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="apartment"
            className="block text-sm font-medium text-gray-700"
          >
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            value={formData.apartment}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md   bg-gray-100 outline-none border-b-2 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="town"
            className="block text-sm font-medium text-gray-700"
          >
            Town/City<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="town"
            name="town"
            required
            value={formData.town}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md   bg-gray-100 outline-none border-b-2 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md   bg-gray-100 outline-none border-b-2 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md   bg-gray-100 outline-none border-b-2 p-2"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="saveInfo"
            className="ml-2 block text-sm text-gray-700"
          >
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
}

export default BillingDetails;
