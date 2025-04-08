// Imports
import React, { useEffect, useState } from "react";
import "./Cart.css";
import Breadcrumb from "../../components/ui/breadcrumb/Breadcrumb";
import { ChevronLeftIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { shippingFee, taxFee } from "../../assets/data";

// Component Function
const Cart = () => {
  // Declarations
  const navigate = useNavigate();
  const { cartData, updateCart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartData.map((item) => item.quantity)
  );
  // Functions
  const handleCartUpdate = () => {
    const updatedCart = cartData.map((item, index) => ({
      ...item,
      quantity: quantities[index],
    }));
    updateCart(updatedCart);
  };

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
              {cartData.length > 0 &&
                cartData.map((item, index) => (
                  <tr key={index} className="cart__item-body--row">
                    <td className="cart__item-info">
                      <div className="cart__item-details">
                        <div className="cart__item-image">
                          <img src={item.image} alt="Product" />
                        </div>
                        <div className="cart__item-description">
                          <h1 className="cart__item-title">{item.title}</h1>
                          <p className="cart__item-variants">
                            {/* Color: White, Size: M */}
                            {item.colors.length > 0 &&
                              item.colors.map((color, index) => {
                                return (
                                  <span key={index}>
                                    {color}
                                    {index !== item.colors.length - 1 && ","}
                                  </span>
                                );
                              })}
                            <br />
                            {item.sizes.length > 0 &&
                              item.sizes.map((size, index) => {
                                return (
                                  <span key={index}>
                                    {size}
                                    {index !== item.sizes.length - 1 && ","}
                                  </span>
                                );
                              })}
                          </p>
                        </div>
                        <div className="cart__item-remove">
                          <Trash onClick={() => removeFromCart(item._id)} />
                        </div>
                      </div>
                    </td>
                    <td className="cart__item-price">
                      <p>${item.price}</p>
                    </td>
                    <td className="cart__item-quantity">
                      <div className="cart__quantity-control">
                        <div
                          className="cart__quantity-decrease"
                          onClick={() => {
                            if (quantities[index] > 1) {
                              setQuantities((prev) =>
                                prev.map((qty, i) =>
                                  i === index ? qty - 1 : qty
                                )
                              );
                            }
                          }}
                        >
                          -
                        </div>
                        <div className="cart__quantity-value">
                          {quantities[index]}
                        </div>
                        <div
                          className="cart__quantity-increase"
                          onClick={() =>
                            setQuantities((prev) =>
                              prev.map((qty, i) =>
                                i === index ? qty + 1 : qty
                              )
                            )
                          }
                        >
                          +
                        </div>
                      </div>
                    </td>

                    <td className="cart__item-total">
                      $
                      {Math.ceil(
                          Number(item.price) * Number(quantities[index])
                        )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="cart__actions">
            <button
              onClick={() => navigate("/shop")}
              className="cart__continue-shopping"
            >
              <ChevronLeftIcon />
              Continue Shopping
            </button>
            <button onClick={handleCartUpdate} className="cart__update">
              Update Cart
            </button>
          </div>
        </div>

        {/* Cart Order summary */}
        <div className="cart__summary">
          <h1 className="cart__summary-title">Order Summary</h1>
          <div className="cart__summary-row">
            <h1 className="cart__summary-label">Subtotal</h1>
            <p className="cart__summary-total-value">
              $
              {
                cartData.length > 0
                ? cartData.reduce(
                    (acc, item, index) =>
                      acc +
                      Math.ceil(Number(item.price) * Number(quantities[index])),
                    0
                  )
                : 0
              }
            </p>
          </div>
          <div className="cart__summary-row">
            <h1 className="cart__summary-label">Shipping</h1>
            <p className="cart__summary-value">${shippingFee}</p>
          </div>
          <div className="cart__summary-row">
            <h1 className="cart__summary-label">Estimated tax</h1>
            <p className="cart__summary-value">${taxFee}</p>
          </div>
          <hr className="cart__divider" />
          <div className="cart__summary-total">
            <h1 className="cart__summary-total-label">Total</h1>
            <p className="cart__summary-total-value">
              $
              {cartData.length > 0
                ? cartData.reduce(
                    (acc, item, index) => {
                      const price = Number(item.price);
                      const quantity = Number(quantities[index]);
                      return acc + Math.ceil(price * quantity);
                    },
                    Number(shippingFee) + Number(taxFee) // Ensure fees are added correctly
                  )
                : Number(shippingFee) + Number(taxFee)}
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/checkout");
            }}
            className="cart__checkout"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
