// Imports
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import SearchModal from "./components/search-modal/SearchModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import NotFound from "./pages/not-found/NotFound";
import AuthModal from "./components/auth-modal/AuthModal";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import Dashboard from "./pages/dashboard/Dashboard";
import OrderDetails from "./pages/order-details/OrderDetails";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import WishList from "./pages/wishlist/WishList";
import Settings from "./pages/settings/Settings";
import ProductDetails from "./pages/product-details/ProductDetails";

// Component Function
const App = () => {
  // Declarations
  const [sidebar, setSidebar] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);

  // Functions
  const toggleSearchModal = () => {
    setSearchModal((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const toggleAuthModal = () => {
    setAuthModal((prev) => !prev);
  };

  // Return Component
  return (
    <>
      <Router>
        <Sidebar isOpen={sidebar} toggleSidebar={toggleSidebar} />
        <SearchModal
          isOpen={searchModal}
          toggleSearchModal={toggleSearchModal}
        />
        <AuthModal isOpen={authModal} toggleAuthModal={toggleAuthModal} />
        <Navbar
          authModal={authModal}
          toggleAuthModal={toggleAuthModal}
          sidebar={sidebar}
          toggleSidebar={toggleSidebar}
          searchModal={searchModal}
          toggleSearchModal={toggleSearchModal}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
