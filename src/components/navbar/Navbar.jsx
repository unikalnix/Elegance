import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { navItems, categories } from "../../assets/data";
import { Search, ShoppingCart, User, Menu, LogIn } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-router-dom";
import useIsLogin from "../../hooks/useIsLogin";

const Navbar = ({
  sidebar,
  toggleSidebar,
  searchModal,
  toggleSearchModal,
  authModal,
  toggleAuthModal,
}) => {
  const [scroll, setScroll] = useState(0);
  const isMobile = useIsMobile();
  const isLoggedIn = useIsLogin();

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (sidebar || searchModal || authModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebar, searchModal, authModal]);
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
          <Search onClick={toggleSearchModal} />
          {!isLoggedIn && <LogIn onClick={toggleAuthModal} />}
          {isLoggedIn && (
            <>
              <User />
              <div className="cart">
                <Link className="link text-black" to="/checkout">
                  <ShoppingCart />
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
