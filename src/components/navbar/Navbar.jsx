// Import Statements
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { navItems, categories } from "../../assets/data";
import { Search, ShoppingCart, User, Menu, LogIn } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-router-dom";
import useIsLogin from "../../hooks/useIsLogin";
import Dropdown from "../ui/dropdown/Dropdown";

// Component Function
const Navbar = ({
  sidebar,
  toggleSidebar,
  searchModal,
  toggleSearchModal,
  authModal,
  toggleAuthModal,
}) => {
  // Declarations
  const [scroll, setScroll] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);
  const isMobile = useIsMobile();
  const isLoggedIn = useIsLogin();

  // Functions
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  // useEffect hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (sidebar || searchModal || authModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebar, searchModal, authModal]);

  // Return Component
  return (
    <>
      <nav
        className="navbar"
        style={{
          height: scroll > 20 ? "50px" : "70px",
          boxShadow: scroll > 20 ? "0 1px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Link className="link" to="/">
          <h1>Elegance</h1>
        </Link>
        <ul>
          {navItems.map((navItem, index) => {
            return (
              <Link
                onClick={() => {
                  let category = categories.filter(
                    (category) => category === navItem
                  );
                  let isFound = category.toString() !== "" ? true : false;
                  if (isFound) {
                    localStorage.setItem("category", category);
                  }
                }}
                key={index}
                className="link"
                to={
                  navItem === "about"
                    ? "/about"
                    : navItem === "contact"
                    ? "/contact"
                    : "/shop"
                }
              >
                <li
                  style={{
                    color: navItem === "sale" && "rgb(220, 38, 38)",
                  }}
                >
                  {navItem}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="navbar-right">
          <Search size={20} onClick={toggleSearchModal} />
          {!isLoggedIn && <LogIn size={20} onClick={toggleAuthModal} />}
          {isLoggedIn && (
            <>
              <div className="user-dropdown-wrapper">
                <User
                  size={20}
                  onClick={() => setShowDropDown((prev) => !prev)}
                />
                {showDropDown && (
                  <Dropdown
                    dropDownRef={dropDownRef}
                    toggleDropDown={() => setShowDropDown((prev) => !prev)}
                  />
                )}
              </div>
              <div className="cart">
                <Link className="link text-black" to="/checkout">
                  <ShoppingCart size={20} />
                </Link>
                <span>10</span>
              </div>
            </>
          )}
          {isMobile && <Menu onClick={toggleSidebar} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
