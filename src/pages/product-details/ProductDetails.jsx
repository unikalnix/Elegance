// Imports
import React from "react";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import shirt from "../../assets/images/shirt.jpeg";
import {
  ArrowLeft,
  Bus,
  Heart,
  Share,
  ShieldCheck,
  ShoppingCart,
  Ticket,
} from "lucide-react";

// Component Function
const ProductDetails = () => {
  // Declarations
  const navigate = useNavigate();

  //   Return Component
  return (
    <div className="product-details">
      {/* Back to Shop Button */}
      <h3
        onClick={() => navigate("/shop")}
        className="product-details__back-button"
      >
        <ArrowLeft size={15} />
        Back to Shop
      </h3>

      <div className="product-details__content">
        {/* Left: Images Section */}
        <div className="product-details__images">
          <div className="product-details__image-main">
            <img src={shirt} alt="Main Product" />
          </div>
          <div className="product-details__image-thumbnails">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="product-details__image-thumbnail">
                <img src={shirt} alt={`Thumbnail ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info Section */}
        <div className="product-details__info">
          {/* Labels */}
          <div className="product-details__labels">
            <span className="product-details__label product-details__label--new">
              New Arrival
            </span>
            <span className="product-details__label product-details__label--category">
              Men
            </span>
          </div>

          <h1 className="product-details__title">Premium Cotton Shirt</h1>
          <h2 className="product-details__price">$89.99</h2>
          <p className="product-details__description">
            Our premium cotton shirt is crafted from the finest Egyptian cotton,
            offering exceptional comfort and durability. The breathable fabric
            makes it perfect for all-day wear, while the classic design ensures
            timeless style.
          </p>

          {/* Color Selection */}
          <div className="product-details__color">
            <h1 className="product-details__color-title">Color: White</h1>
            <div className="product-details__color-options">
              <div className="product-details__color-option product-details__color-option--white"></div>
              <div className="product-details__color-option product-details__color-option--blue"></div>
              <div className="product-details__color-option product-details__color-option--purple"></div>
              <div className="product-details__color-option product-details__color-option--gray"></div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="product-details__size">
            <div className="product-details__size-header">
              <h1 className="product-details__size-title">Size: S</h1>
              <h2 className="product-details__size-guide">Size Guide</h2>
            </div>
            <div className="product-details__size-options">
              <div className="product-details__size-option">S</div>
              <div className="product-details__size-option">M</div>
              <div className="product-details__size-option">L</div>
              <div className="product-details__size-option">XL</div>
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="product-details__actions">
            <div className="product-details__quantity">
              <div className="product-details__quantity-decrease">-</div>
              <div className="product-details__quantity-value">1</div>
              <div className="product-details__quantity-increase">+</div>
            </div>

            <button className="product-details__add-to-cart">
              <ShoppingCart />
              Add to Cart
            </button>

            <div className="product-details__wishlist-share">
              <div className="product-details__wishlist">
                <Heart />
              </div>
              <div className="product-details__share">
                <Share />
              </div>
            </div>
          </div>

          {/* Extra Info */}
          <div className="product-details__extra-info">
            <div className="product-details__extra-item">
              <Bus />
              <p>
                Free Shipping Over <br /> $100
              </p>
            </div>
            <div className="product-details__extra-item">
              <Ticket />
              <p>30-day returns</p>
            </div>
            <div className="product-details__extra-item">
              <ShieldCheck />
              <p>2-year warranty</p>
            </div>
          </div>

          <hr className="product-details__divider" />

          {/* Details, Sizing, Care */}
          <div className="product-details__tabs">
            <div className="product-details__tab">Details</div>
            <div className="product-details__tab">Sizing</div>
            <div className="product-details__tab">Care</div>
          </div>

          <div className="product-details__tab-content">
            <p>Made from 100% premium Egyptian cotton</p>
            <p>Classic fit</p>
            <p>Button-down collar</p>
            <p>Adjustable cuffs</p>
            <p>Available in multiple colors</p>
            <p>Machine washable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
