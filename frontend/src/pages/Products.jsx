import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load Products");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center min-h-[200px]">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg font-medium">
            <span className="inline-block animate-pulse">
              Loading products
              <span className="inline-block ml-1">
                <span className="animate-bounce delay-75">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-md w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center py-12">
          <h1 className="text-4xl font-extrabold text-red-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Good pizza takes time, but it's worth the wait!
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Preparing your delicious order
          </p>
        </div> */}
        <div className="bg-gradient-to-br from-yellow-100 via-red-50 to-yellow-200 py-16 px-4 text-center">
          <h1 className="text-5xl font-extrabold text-red-600 drop-shadow-sm sm:text-6xl tracking-tight mb-4">
            🍕 Good pizza takes time — and it's worth the wait!
          </h1>

          
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <ProductList products={products} showCategory />
        </div>
      </div>
    </div>
  );
}

export default Products;
