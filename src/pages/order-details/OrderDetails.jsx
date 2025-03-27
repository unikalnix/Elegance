import React, { useState } from "react";
import "./OrderDetails.css";
import {
  ArrowLeft,
  BusFront,
  Check,
  Download,
  Package,
  Printer,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="order-details">
      {/* Breadcrumb */}
      <div className="order-details__breadcrumb">
        <span onClick={() => navigate('/')} className="order-details__breadcrumb-item">Home /</span>
        <span onClick={() => navigate('/dashboard')} className="order-details__breadcrumb-item">Dashboard /</span>
        <span onClick={() => navigate('/orders')} className="order-details__breadcrumb-item">Orders /</span>
        <span className="order-details__breadcrumb-item order-details__breadcrumb-item--active">
          Order #10001
        </span>
      </div>

      {/* Header Section */}
      <div className="order-details__header">
        <h3 onClick={() => navigate('/orders')} className="order-details__back">
          <ArrowLeft size={15} />
          Back to Orders
        </h3>
        <div className="order-details__actions">
          <button className="order-details__button">
            <Printer size={15} />
            Print
          </button>
          <button className="order-details__button">
            <Download size={15} />
            Download
          </button>
        </div>
      </div>

      {/* Order Overview */}
      <div className="order-details__overview">
        <div className="order-details__info">
          <h1 className="order-details__title">Order #10001</h1>
          <p className="order-details__date">Placed on May 12, 2023</p>
        </div>
        <h2 className="order-details__status order-details__status--delivered">
          Delivered
        </h2>
      </div>

      {/* Order Timeline */}
      <div className="order-details__timeline">
        <h1 className="order-details__timeline-title">Order Timeline</h1>

        <div className="order-details__timeline-step">
          <div className="order-details__timeline-icons">
            <ShoppingBag size={30} className="order-details__timeline-icon" />
            <hr />
          </div>
          <div className="order-details__timeline-info">
            <h1>Order placed</h1>
            <p>May 12, 2023 - 10:23 AM</p>
          </div>
        </div>

        <div className="order-details__timeline-step">
          <div className="order-details__timeline-icons">
            <Package size={30} className="order-details__timeline-icon" />
            <hr />
          </div>
          <div className="order-details__timeline-info">
            <h1>Processing</h1>
            <p>May 12, 2023 - 2:45 PM</p>
          </div>
        </div>

        <div className="order-details__timeline-step">
          <div className="order-details__timeline-icons">
            <BusFront size={30} className="order-details__timeline-icon" />
            <hr />
          </div>
          <div className="order-details__timeline-info">
            <h1>Shipped</h1>
            <p>May 13, 2023 - 9:30 AM</p>
          </div>
        </div>

        <div className="order-details__timeline-step order-details__timeline-step--final">
          <div className="order-details__timeline-icons">
            <Check className="order-details__timeline-icon" size={30} />
          </div>
          <div className="order-details__timeline-info">
            <h1>Delivered</h1>
            <p>May 15, 2023 - 3:15 PM</p>
          </div>
        </div>
      </div>

    <div className="order-details__content-wrapper">
        {/* Order Items */}
      <div className="order-details__items">
        <h1 className="order-details__items-title">Order Items (2)</h1>
        <div className="order-details__table-wrapper">
        <table className="order-details__table">
          <thead className="order-details__table-head">
            <tr className="order-details__table-row">
              <th>Image</th>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="order-details__table-row">
                <td className="order-details__table-cell">
                  <div className="order-details__image">
                    <img src="/images/shirt.jpeg" alt="Product" />
                  </div>
                </td>
                <td className="order-details__table-cell">
                  <h1>Premium Cotton Shirt</h1>
                </td>
                <td className="order-details__table-cell">
                  <div>
                    <h3>Color: White, Size: M</h3>
                    <p>Quantity: 1</p>
                  </div>
                </td>
                <td className="order-details__table-cell">$39.99</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* Shipping & Billing Buttons */}
        <div className="order-details__info-buttons">
          <button onClick={() => {setStep(1);setIsActive(true)}} className={`order-details__info-button ${isActive && 'order-details__info-button--active'}`}>
            Shipping Information
          </button>
          <button onClick={() => {setStep(2);setIsActive(false)}} className={`order-details__info-button ${!isActive && 'order-details__info-button--active'}`}>Billing Information</button>
        </div>

        {/* Shipping Information */}
        {
          step === 1 && <div className="order-details__info-section">
          <h2 className="order-details__info-title">Shipping Information</h2>
          <div className="order-details__info-content">
            <h3>John Smith</h3>
            <p>123 Main St.</p>
            <p>New York, NY 10001</p>
            <p>United States</p>
          </div>
        </div>
        }

        {/* Billing Information */}
       {
        step === 2 &&  <div className="order-details__info-section">
        <h2 className="order-details__info-title">Billing Information</h2>
        <div className="order-details__info-content">
          <h3>John Smith</h3>
          <p>123 Main St.</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </div>
       }
      </div>

      {/* Order Summary */}
      <div className="order-details__summary">
        <div className="order-details__summary-box">
          <h1 className="order-details__summary-title">Order Summary</h1>
          <div className="order-details__summary-item">
            <h3>Subtotal</h3>
            <p>$89.99</p>
          </div>
          <div className="order-details__summary-item">
            <h3>Shipping</h3>
            <p>$5.00</p>
          </div>
          <div className="order-details__summary-item">
            <h3>Tax</h3>
            <p>$5.00</p>
          </div>
          <hr />
          <div className="order-details__summary-total">
            <h3>Total</h3>
            <p>$99.99</p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="order-details__payment">
          <h1>Payment Information</h1>
          <p>Credit Card (**** **** **** 4321)</p>
        </div>

        {/* Help Section */}
        <div className="order-details__help">
          <h1>Need help?</h1>
          <p>
            If you have any questions or concerns about your order, our customer
            service team is here to help.
          </p>
          <button onClick={() => navigate('/contact')} className="order-details__button--support">
            Contact Support
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderDetails;
