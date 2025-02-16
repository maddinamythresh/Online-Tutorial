import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importing Trash Bin Icon from React Icons

// Dummy cart data
const cartItems = [
  { id: 1, name: "Product 1", price: 29.99, quantity: 2, image: "https://via.placeholder.com/100x100" },
  { id: 2, name: "Product 2", price: 49.99, quantity: 1, image: "https://via.placeholder.com/100x100" },
];

const CheckoutPage = () => {
  const [items, setItems] = useState(cartItems);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    postalCode: "",
    country: "USA",
  });
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [isLoading, setIsLoading] = useState(false);

  // Calculate total price of the cart
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Calculate total quantity of items in the cart
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Handle form field changes
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Order Confirmed!");
    }, 1500); // Simulate loading time
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-purple-500 to-blue-400">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Checkout</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Summary */}
          <div className="md:w-2/3 bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cart Summary</h3>

            {/* Total Items */}
            <div className="mb-4 text-lg text-gray-600">
              <span>Total Items: </span>
              <span className="font-semibold">{getTotalItems()}</span>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-lg font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    {/* Remove Button with React Icons */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-red-500 hover:text-red-700 flex items-center space-x-1"
                    >
                      <FaTrashAlt className="text-lg" /> {/* Trash Bin Icon */}
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-6 flex justify-between items-center text-xl font-semibold">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
          </div>

          {/* Shipping and Payment */}
          <div className="md:w-1/3 bg-white shadow-md p-6 rounded-lg">
            {/* Shipping Address Form */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Address</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={address.name}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Street Address</label>
                <input
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <select
                  name="country"
                  value={address.country}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              {/* Payment Method */}
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Payment Method</h3>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-6"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
              </select>

              {/* Confirm Button */}
              <button
                type="submit"
                className={`w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 ${
                  isLoading ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Confirm Order"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
