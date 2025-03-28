// Imports
import React from "react";
import { useNavigate } from "react-router-dom";
import { MoveLeftIcon } from "lucide-react";
import "./NoProductFound.css"; // Importing CSS file
import productNotFound from "../../assets/svg/page-not-found.svg";

// Component Function
const NoProductFound = () => {
  // Declarations
  const navigate = useNavigate();

  // Return Component
  return (
    <div className="no-product-container">
      <img className="no-product-image" src={productNotFound} alt="" />
      <h2 className="no-product-text">No Products Found</h2>
      <button className="btn back-btn" onClick={() => navigate(-1)}>
        <MoveLeftIcon className="back-icon" /> Back
      </button>
    </div>
  );
};

export default NoProductFound;
