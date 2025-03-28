import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import SearchModal from "./components/search-modal/SearchModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop-page/ShopPage";
import NotFound from "./pages/not-found-page/NotFound";
import AuthModal from "./components/auth-modal/AuthModal";
import Checkout from "./pages/checkout-page/Checkout";
import Orders from "./pages/orders-page/Orders";
import Dashboard from "./pages/dashboard/Dashboard";
import OrderDetails from "./pages/order-details/OrderDetails";
import Contact from "./pages/contact-page/Contact";
import About from "./pages/about-page/About";
import Dropdown from "./components/ui/dropdown/Dropdown";
import WishList from "./pages/wishlist-page/WishList";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const toggleSearchModal = () => {
    setSearchModal((prev) => !prev);
  };
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  const toggleAuthModal = () => {
    setAuthModal((prev) => !prev);
  };
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
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
