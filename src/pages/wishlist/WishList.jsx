import React from "react";
import "./WishList.css";
import { ShoppingCart, Trash } from "lucide-react";
import Breadcrumb from "../../components/ui/breadcrumb/Breadcrumb";
import useIsMobile from "../../hooks/useIsMobile";

const WishList = () => {
  const inStock = false;
  const isMobile = useIsMobile();
  return (
    <div className="wishlist">
      {/* Header Section */}
      <div className="wishlist__header">
        <h1 className="wishlist__title">My Wishlist</h1>
        <p className="wishlist__count">3 item(s)</p>
      </div>

      {/* Breadcrumb Section */}
      <Breadcrumb links={["home", "dashboard", "wishlist"]} />

      {/* Wishlist Items */}
      <div className="wishlist__items">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="wishlist__item">
            {/* Product Info */}
            <div className="wishlist__item-info">
              <div className="wishlist__item-image">
                <img
                  src="/images/jeans.jpg"
                  alt="Product"
                  className="wishlist__item-img"
                />
              </div>
              <div className="wishlist__item-details">
                <h1 className="wishlist__item-title">Premium Cotton Shirt</h1>
                <p className="wishlist__item-price">$89.99</p>
                <p style={{
                  color: inStock ? 'rgb(22, 163, 74)' : 'rgb(220, 38, 38)'
                }} className="wishlist__item-status">{inStock ? 'In Stock' : 'Out of Stock'}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="wishlist__item-actions">
              <button
              style={{
                background: inStock ? 'black' : '#CDD1D7',
                cursor: inStock ? 'pointer' :'auto'
              }}
              className="wishlist__item-btn--add">
                <ShoppingCart
                size={isMobile ? 15 : 20}
                className="wishlist__item-icon" />
                Add to Cart
              </button>
              <button className="wishlist__item-btn--delete">
                <Trash size={20} stroke="red" />
              </button>
            </div>

            {/* Divider */}
            <hr className="wishlist__divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
