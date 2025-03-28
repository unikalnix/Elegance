// Imports
import React from "react";
import { categories } from "../../assets/data";
import { navItems } from "../../assets/data";
import "./Sidebar.css";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

// Component Function
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Return Component
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="cross-icon">
        <h1>Elegance</h1>
        <X onClick={toggleSidebar} />
      </div>
      <ul>
        {navItems.map((item, index) => {
          return (
            <Link
              key={index}
              className="link text-black"
              to={
                item === "about"
                  ? "/about"
                  : item === "contact"
                  ? "/contact"
                  : "/shop"
              }
            >
              <li
                style={{
                  color: item === "sale" && "rgb(220, 38, 38)",
                }}
                onClick={() => {
                  let category = categories.filter(
                    (category) => category === item
                  );
                  let isFound = category.toString() !== "" ? true : false;
                  if (isFound) {
                    localStorage.setItem("category", category);
                  }
                  toggleSidebar();
                }}
              >
                {item}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
