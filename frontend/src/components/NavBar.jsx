import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/productMenu?category=${category}`);
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold flex items-center mb-3 sm:mb-0 hover:text-gray-300 transition-colors"
        >
          <span className="mr-2">🍕</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
            Pizza Billing
          </span>
        </Link>

        <div className="flex space-x-2 sm:space-x-4">
          <Link
            to="/"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 hover:text-orange-300 transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/invoices"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 hover:text-orange-300 transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Invoices</span>
          </Link>

          <Link
            to="/cart"
            className="px-3 py-2 rounded-lg hover:bg-gray-700 hover:text-orange-300 transition-colors flex items-center relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>

      <nav className="bg-gray-700 py-2 px-4 overflow-x-auto">
        <div className="container mx-auto flex justify-center space-x-4 min-w-max">
          <button
            onClick={() => handleCategoryClick("pizza")}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all transform hover:scale-105 active:scale-95 flex items-center whitespace-nowrap"
          >
            <span className="mr-2">🍕</span>
            Pizza
          </button>
          <button
            onClick={() => handleCategoryClick("beverages")}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all transform hover:scale-105 active:scale-95 flex items-center whitespace-nowrap"
          >
            <span className="mr-2">🍹</span>
            Beverages
          </button>
          <button
            onClick={() => handleCategoryClick("toppings")}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-red-700 text-white font-medium transition-all transform hover:scale-105 active:scale-95 flex items-center whitespace-nowrap"
          >
            <span className="mr-2">🌶️</span>
            Toppings
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
