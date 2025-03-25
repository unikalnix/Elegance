import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { navItems } from "../../assets/data";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const isMobile = useIsMobile();
  const handleScroll = () => {
    console.log(window.scrollY);
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>{
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <nav
      className="navbar"
      style={{
        height: scroll > 20 ? "50px" : "70px",
        boxShadow: scroll > 20 ? "0 1px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <h1>Elegance</h1>
      <ul>
        {navItems.map((navItem, index) => {
          return <li key={index}>{navItem}</li>;
        })}
      </ul>
      <div className="navbar-right">
        <Search />
        <User />
        <div className="cart">
          <ShoppingCart />
          <span>10</span>
        </div>
        {isMobile && <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;
