import React from "react";
import "./Dropdown.css";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ isActive, toggleDropDown }) => {
  const navigate = useNavigate();
  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        <li className="dropdown__item dropdown__item--account">Account</li>
        <hr className="dropdown__divider" />
        <li
          onClick={() => {
            navigate("/dashboard");
            toggleDropDown();
          }}
          className="dropdown__item"
        >
          Dashboard
        </li>
        <li
          onClick={() => {
            navigate("/orders");
            toggleDropDown();
          }}
          className="dropdown__item"
        >
          My Orders
        </li>
        <li
          onClick={() => {
            navigate("/wishlist");
            toggleDropDown();
          }}
          className="dropdown__item"
        >
          Wishlist
        </li>
        <hr className="dropdown__divider" />
        <li
          onClick={() => {
            navigate("/dashboard");
            toggleDropDown();
          }}
          className="dropdown__item"
        >
          Settings
        </li>
        <li className="dropdown__item dropdown__item--signout">Sign Out</li>
      </ul>
    </div>
  );
};

export default Dropdown;
