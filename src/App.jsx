import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import SearchModal from "./components/searchModal/SearchModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shopPage/ShopPage";
import NotFound from "./pages/notFound/NotFound";
import AuthModal from "./components/authmodal/AuthModal";

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
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
