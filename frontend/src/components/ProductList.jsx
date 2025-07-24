import React, { useState } from "react";
import { useCart } from "./CartContext";

const ProductList = ({ products, title, showCategory = false }) => {
  const { addToCart } = useCart();
  const [notification, setNotification] = React.useState(null);
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    addToCart(product, qty);
    setNotification(`${product.name} (${qty}) added to cart!`);
    setTimeout(() => setNotification(null), 3000);
    setQuantities((prev) => ({ ...prev, [product.id]: 1 })); // Reset quantity
  };

  return (
    <div className="p-4 sm:p-6">
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-3 rounded-lg shadow-xl z-50 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {notification}
        </div>
      )}

      {title && (
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 relative pb-3 
    after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-green-400 after:to-emerald-600 after:rounded-full capitalize"
        >
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="relative pt-[100%] bg-gray-50">
              <img
                src={process.env.PUBLIC_URL + product.image}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    process.env.PUBLIC_URL + "/images/placeholder.png";
                  e.target.className =
                    "absolute top-0 left-0 w-full h-full object-contain p-4 bg-gray-200";
                }}
              />
            </div>

            <div className="p-4 flex-grow flex flex-col">
              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
                  {product.name}
                </h3>

                {/* <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-red-900">
                    LKR {product.price.toLocaleString("en-LK")}
                  </span> */}
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-extrabold text-red-900">
                    LKR {product.price.toLocaleString("en-LK")}
                  </span>
                </div>

                {showCategory && (
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {product.category}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuantities((prev) => ({
                        ...prev,
                        [product.id]: Math.max(1, prev[product.id] || 1) - 1,
                      }));
                    }}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 w-10 text-center">
                    {quantities[product.id] || 1}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuantities((prev) => ({
                        ...prev,
                        [product.id]: (prev[product.id] || 1) + 1,
                      }));
                    }}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-1 px-3 rounded-lg transition-all"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
