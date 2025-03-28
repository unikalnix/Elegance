// Imports
import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";
import { MoveLeftIcon } from "lucide-react";
import pageNotFound from "../../assets/svg/page-not-found.svg";

// Component Function
const NotFound = () => {
  // Declarations
  const navigate = useNavigate();

  // Return Component
  return (
    <div className="not-found-container">
      <img className="not-found-image" src={pageNotFound} alt="" />
      <h2 className="not-found-text">Oops! Page Not Found</h2>
      <button className="btn back-btn" onClick={() => navigate(-1)}>
        <MoveLeftIcon className="back-icon" /> Back
      </button>
    </div>
  );
};

export default NotFound;
