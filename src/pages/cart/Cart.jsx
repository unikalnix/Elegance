// Imports
import React from "react";
import "./Cart.css";
import Breadcrumb from "../../components/ui/breadcrumb/Breadcrumb";
import { ChevronLeftIcon, Trash } from "lucide-react";
import shirt from "../../assets/images/shirt.jpeg";

// Component Function
const Cart = () => {
  // Return Component
  return (
    <div className="cart">
      <Breadcrumb links={["Home", "Shopping Cart"]} />
      <h1 className="cart__title">Shopping Cart</h1>
      <div className="cart__container">
        {/* Cart items */}
        <div className="cart__items">
          <table className="cart__table">
            <thead className="cart__table-header">
              <tr className="cart__table-header--row">
                <th className="cart__table-head">Product</th>
                <th className="cart__table-head">Price</th>
                <th className="cart__table-head">Quantity</th>
                <th className="cart__table-head">Total</th>
              </tr>
            </thead>
            <tbody className="cart__table-body">
              {[...Array(5)].map((item, index) => (
                <tr key={index} className="cart__item-body--row">
                  <td className="cart__item-info">
                    <div className="cart__item-details">
                      <div className="cart__item-image">
                        <img src={shirt} alt="Product" />
                      </div>
                      <div className="cart__item-description">
                        <h1 className="cart__item-title">
                          Premium Cotton Shirt
                        </h1>
                        <p className="cart__item-variants">
                          Color: White, Size: M
                        </p>
                      </div>
                      <div className="cart__item-remove">
                        <Trash />
                      </div>
                    </div>
                  </td>
                  <td className="cart__item-price">
                    <p>$89.99</p>
                  </td>
                  <td className="cart__item-quantity">
                    <div className="cart__quantity-control">
                      <div className="cart__quantity-decrease">-</div>
                      <div className="cart__quantity-value">1</div>
                      <div className="cart__quantity-increase">+</div>
                    </div>
                  </td>
                  <td className="cart__item-total">$89.99</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart__actions">
            <button className="cart__continue-shopping">
              <ChevronLeftIcon />
              Continue Shopping
            </button>
            <button className="cart__update">Update Cart</button>
          </div>
        </div>

        {/* Cart Order summary */}
        <div className="cart__summary">
          <h1 className="cart__summary-title">Order Summary</h1>
          <div className="cart__summary-row">
            <h1 className="cart__summary-label">Subtotal</h1>
            <p className="cart__summary-value">$379.97</p>
          </div>
          <div className="cart__summary-row">
            <h1 className="cart__summary-label">Shipping</h1>
            <p className="cart__summary-value">$9.99</p>
          </div>
          <div className="cart__summary-row">
            <h1 className="cart__summary-label">Estimated tax</h1>
            <p className="cart__summary-value">$26.60</p>
          </div>
          <hr className="cart__divider" />
          <div className="cart__summary-total">
            <h1 className="cart__summary-total-label">Total</h1>
            <p className="cart__summary-total-value">$416.56</p>
          </div>
          <button className="cart__checkout">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
