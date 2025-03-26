import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { navItems } from "../../assets/data";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-router-dom";

const Navbar = ({ sidebar, toggleSidebar, searchModal, toggleSearchModal }) => {
  const [scroll, setScroll] = useState(0);
  const isMobile = useIsMobile();
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
    if (sidebar || searchModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebar, searchModal]);
  return (
    <>
      <nav
        className="navbar"
        style={{
          height: scroll > 20 ? "50px" : "70px",
          boxShadow: scroll > 20 ? "0 1px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <Link className="link" to='/'><h1>Elegance</h1></Link>
        <ul>
          {navItems.map((navItem, index) => {
            return <Link key={index} className="link" to='/shop'><li style={{
              color: navItem === 'sale' && 'rgb(220, 38, 38)'
            }}>{navItem}</li></Link>;
          })}
        </ul>
        <div className="navbar-right">
          <Search onClick={toggleSearchModal}/>
          <User />
          <div className="cart">
            <ShoppingCart />
            <span>10</span>
          </div>
          {isMobile && <Menu onClick={toggleSidebar} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
