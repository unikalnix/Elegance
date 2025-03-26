import React, { useState } from "react";
import { navItems } from "../../assets/data";
import "./Sidebar.css";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className={`sidebar ${isOpen ? "open" : ""}`}
    >
      <div className="cross-icon">
        <h1>Elegance</h1>
        <X onClick={toggleSidebar} />
      </div>
      <ul>
        {navItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
