// Imports
import React, { useState } from "react";
import "./Checkout.css";
import * as lucide from "lucide-react";
import { useNavigate } from "react-router-dom";
import shirt from "../../assets/images/shirt.jpeg";

// Component Function
const Checkout = () => {
  // Declarations
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Return Component
  return (
    <>
      <div className="checkout__header">
        <h1 className="checkout__title">Checkout</h1>
        <div className="checkout__steps">
          <div
            className={`checkout__step ${
              step === 1 && "checkout__step--active"
            }`}
          >
            <div className="checkout__step-number">1</div>
            <p className="checkout__step-label">Shipping</p>
          </div>
          <div
            className={`checkout__step ${
              step === 2 && "checkout__step--active"
            }`}
          >
            <div className="checkout__step-number">2</div>
            <p className="checkout__step-label">Payment</p>
          </div>
          <div
            className={`checkout__step ${
              step === 3 && "checkout__step--active"
            }`}
          >
            <div className="checkout__step-number">
              {step === 1 || step === 2 ? "3" : "✓"}
            </div>
            <p className="checkout__step-label">Confirmation</p>
          </div>
        </div>
      </div>

      <div className="checkout__content">
        <div className="checkout__summary">
          <h2 className="checkout__summary-title">Order Summary</h2>
          <div className="checkout__summary-items">
            <div className="checkout__summary-item">
              <div className="checkout__summary-image">
                <img src={shirt} alt="Product" />
              </div>
              <div className="checkout__summary-details">
                <h3 className="checkout__summary-name">Premium Cotton Shirt</h3>
                <p className="checkout__summary-variant">White, Size M</p>
                <div className="checkout__summary-pricing">
                  <h4 className="checkout__summary-price">$89.99 x 1</h4>
                  <p className="checkout__summary-total">$89.99</p>
                </div>
              </div>
            </div>

            <div className="checkout__summary-item">
              <div className="checkout__summary-image">
                <img src={shirt} alt="Product" />
              </div>
              <div className="checkout__summary-details">
                <h3 className="checkout__summary-name">Premium Cotton Shirt</h3>
                <p className="checkout__summary-variant">White, Size M</p>
                <div className="checkout__summary-pricing">
                  <h4 className="checkout__summary-price">$89.99 x 1</h4>
                  <p className="checkout__summary-total">$89.99</p>
                </div>
              </div>
            </div>

            <div className="checkout__summary-item">
              <div className="checkout__summary-image">
                <img src={shirt} alt="Product" />
              </div>
              <div className="checkout__summary-details">
                <h3 className="checkout__summary-name">Premium Cotton Shirt</h3>
                <p className="checkout__summary-variant">White, Size M</p>
                <div className="checkout__summary-pricing">
                  <h4 className="checkout__summary-price">$89.99 x 1</h4>
                  <p className="checkout__summary-total">$89.99</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="checkout__divider" />

          <div className="checkout__summary-subtotal">
            <h3>Subtotal</h3>
            <p>$219.98</p>
          </div>
          <div className="checkout__summary-shipping">
            <h3>Shipping</h3>
            <p>$9.99</p>
          </div>
          <div className="checkout__summary-tax">
            <h3>Estimated Tax</h3>
            <p>$17.60</p>
          </div>

          <hr className="checkout__divider" />

          <div className="checkout__summary-total">
            <h3>Total</h3>
            <p>$247.57</p>
          </div>
        </div>

        {/* Shipping Details */}
        {step === 1 && (
          <div className="checkout__form-container">
            <h2 className="checkout__form-title">Shipping Information</h2>
            <form className="checkout__form">
              <div className="checkout__form-row">
                <div className="checkout__form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" />
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />
                </div>
              </div>

              <div className="checkout__form-row">
                <div className="checkout__form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" />
                </div>
              </div>

              <div className="checkout__form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" />
              </div>

              <div className="checkout__form-row">
                <div className="checkout__form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" />
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" />
                </div>
              </div>

              <div className="checkout__form-row">
                <div className="checkout__form-group">
                  <label htmlFor="postal">Postal Code</label>
                  <input type="text" id="postal" />
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" />
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                type="submit"
                className="checkout__submit-button"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        )}
        {/* Payment Details */}
        {step === 2 && (
          <div className="checkout__form-container">
            <h2 className="checkout__form-title">
              Payment Details <lucide.CreditCard />
            </h2>
            <form className="checkout__form">
              <div className="checkout__form-group">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="checkout__form-row">
                <div className="checkout__form-group">
                  <label htmlFor="expiry-date">Expiry Date</label>
                  <input type="text" id="expiry-date" placeholder="MM/YY" />
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="cvc-code">CVC</label>
                  <input type="text" id="cvc-code" placeholder="000" />
                </div>
              </div>
              <div className="checkout__form-group">
                <label htmlFor="name-on-card">Name on Card</label>
                <input type="text" id="name-on-card" />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
                type="submit"
                className="checkout__submit-button"
              >
                Pay 247.57 USD
              </button>
            </form>
          </div>
        )}
        {/* Confirmation */}
        {step === 3 && (
          <div className="checkout__confirmation">
            <div className="checkout__confirmation-icon"></div>
            <h1 className="checkout__confirmation-title">
              Thank you for your order
            </h1>
            <p className="checkout__confirmation-message">
              Your order has been placed and is being processed. You will
              receive a confirmation email shortly.
            </p>
            <div className="checkout__confirmation-details">
              <div className="checkout__confirmation-detail">
                <h1 className="checkout__confirmation-label">Order Number:</h1>
                <p className="checkout__confirmation-value">ORD-10087</p>
              </div>
              <div className="checkout__confirmation-detail">
                <h1 className="checkout__confirmation-label">
                  Estimated Delivery:
                </h1>
                <p className="checkout__confirmation-value">May 25-28, 2023</p>
              </div>
            </div>
            <div className="checkout__confirmation-actions">
              <button
                onClick={() => navigate("/orders")}
                className="checkout__confirmation-button checkout__confirmation-button--primary"
              >
                View Order Details
              </button>
              <button
                onClick={() => navigate("/shop")}
                className="checkout__confirmation-button checkout__confirmation-button--secondary"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
