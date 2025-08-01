import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import ProductMenu from "./components/ProductMenu";
import NavBar from "./components/NavBar";
import InvoicePrint from "./components/InvoicePrint";
import { InvoicesProvider } from "./components/InvoicesContext";
import { CartProvider } from "./components/CartContext";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow">
        <CartProvider>
          <InvoicesProvider>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/productMenu" element={<ProductMenu />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/invoice/:id" element={<InvoicePrint />} />
              </Routes>
            </Router>
          </InvoicesProvider>
        </CartProvider>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
