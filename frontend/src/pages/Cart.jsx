import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();

  const [cashierName, setCashierName] = useState("");
  const [isGeneratingInvoice, setIsGeneratingInvoice] = useState(false);
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);

  const navigate = useNavigate();

  const showInvoice = () => {
    navigate("/invoices");
  };

  const createInvoice = async (invoiceData) => {
    try {
      const response = await axios.post(
        "https://pizza-shop-billing-system.onrender.com/api/invoices",
        invoiceData
      );
      console.log("Invoice created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating invoice:", error);
      throw error;
    }
  };

  const handleSubmitInvoice = async (e) => {
    e.preventDefault();

    const invoiceData = {
      cashierName,
      items: cart.map((item) => ({
        itemId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      subtotal,
      tax,
      total,
    };

    try {
      await createInvoice(invoiceData);
      setInvoiceGenerated(true);
      clearCart();
      setCashierName("");
    } catch (error) {
      console.error("Failed to create invoice:", error);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const TAX_RATE = 0.1;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleGenerateInvoice = () => {
    setIsGeneratingInvoice(true);
  };

  if (invoiceGenerated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
        <div className="bg-green-100 p-6 rounded-xl max-w-md w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-green-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Invoice Generated Successfully!
          </h2>
          <button
            onClick={() => showInvoice()}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md w-full"
          >
            Invoice
          </button>
        </div>
      </div>
    );
  }

  if (isGeneratingInvoice) {
    return (
      <div className="max-w-md mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Generate Invoice
          </h2>

          <form onSubmit={handleSubmitInvoice} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cashier Name
              </label>
              <input
                type="text"
                value={cashierName}
                onChange={(e) => setCashierName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="Enter cashier name"
                required
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Order Items</h3>
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="py-3 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        Rs. {item.price} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-gray-800">
                      Rs. {item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-200">
                <span className="text-gray-600">Tax (10%):</span>
                <span className="font-medium">Rs. {tax}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-200 font-bold text-lg">
                <span className="text-gray-800">Total:</span>
                <span className="text-green-600">Rs. {total}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsGeneratingInvoice(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg font-medium transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
              >
                Confirm Invoice
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-green-500 after:to-emerald-600 after:rounded-full">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-gray-500 mb-4">Your cart is empty</p>
          </div>
        ) : (
          <div>
            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l-md hover:bg-gray-300"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center bg-gray-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r-md hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="font-medium text-gray-800 ml-4 whitespace-nowrap">
                    Rs. {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  Total:
                </span>
                <span className="text-xl font-bold text-green-600">
                  Rs. {total}
                </span>
              </div>
            </div>

            <button
              onClick={handleGenerateInvoice}
              className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg font-medium transition-all shadow hover:shadow-md"
            >
              Generate Invoice
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
