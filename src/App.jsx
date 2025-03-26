import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import SearchModal from "./components/searchModal/SearchModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shopPage/ShopPage";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const toggleSearchModal = () => {
    setSearchModal((prev) => !prev);
  };
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={sidebar} toggleSidebar={toggleSidebar} />
        <SearchModal
          isOpen={searchModal}
          toggleSearchModal={toggleSearchModal}
        />
        <Navbar
          sidebar={sidebar}
          toggleSidebar={toggleSidebar}
          searchModal={searchModal}
          toggleSearchModal={toggleSearchModal}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
