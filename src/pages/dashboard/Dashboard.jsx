import { Heart, LogOut, Settings, ShoppingBag, User } from "lucide-react";
import "./Dashboard.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // User information state
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("+1 234 567 8900");
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You are logged out");
  };

  const handleInfoUpdate = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phone,
    };

    console.log(userData);
    confirm("Review your changes\n", userData);
    alert("Your changes are saved");
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">My Dashboard</h1>

      <div className="dashboard__container">
        {/* Profile Section */}
        <div className="dashboard__profile">
          <div className="dashboard__profile-header">
            <div className="dashboard__profile-image">
              <img src="/images/sweater.jpeg" alt="User" />
            </div>
            <div>
              <h1 className="dashboard__profile-name">
                {firstName} {lastName}
              </h1>
              <p className="dashboard__profile-email">{email}</p>
            </div>
          </div>

          <ul className="dashboard__menu">
            <li className="dashboard__menu-item dashboard__menu-item--active">
              <User /> Account
            </li>
            <li
              onClick={() => navigate("/orders")}
              className="dashboard__menu-item"
            >
              <ShoppingBag /> My Orders
            </li>
            <li
              onClick={() => navigate("/wishlist")}
              className="dashboard__menu-item"
            >
              <Heart /> Wishlist
            </li>
            <li
              onClick={() => navigate("/settings")}
              className="dashboard__menu-item"
            >
              <Settings /> Settings
            </li>
            <li
              onClick={handleLogout}
              className="dashboard__menu-item dashboard__menu-item--logout"
            >
              <LogOut /> Logout
            </li>
          </ul>
        </div>

        {/* Personal Info Section */}
        <div className="dashboard__info">
          <h1 className="dashboard__info-title">Personal Information</h1>
          <form onSubmit={handleInfoUpdate} className="dashboard__form">
            <div className="dashboard__form-group">
              <div className="dashboard__form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="dashboard__form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="dashboard__form-group">
              <div className="dashboard__form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="dashboard__form-field">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <input
              type="submit"
              value="Update Information"
              className="dashboard__form-submit"
            />
          </form>

          <hr className="dashboard__info-divider" />

          {/* Recent Orders Section */}
          <h1 className="dashboard__orders-title">Recent Orders</h1>

          {[...Array(5)].map((_, i) => {
            return (
              <div key={i} className="dashboard__order">
                <div className="dashboard__order-info">
                  <div className="dashboard__order-info--details">
                    <h1>Order #10001</h1>
                    <p>Placed on May 11, 2023</p>
                  </div>
                  <div className="dashboard__order-info--status">
                    <h1>$99.99</h1>
                    <p className="dashboard__order-info--status--delivered">
                      Delivered
                    </p>
                  </div>
                </div>
                <p
                  onClick={() => navigate(`/order-details/${i}`)}
                  className="dashboard__order-details"
                >
                  View Order Details
                </p>
                <hr className="dashboard__order-divider" />
              </div>
            );
          })}
          <p
            onClick={() => navigate("/orders")}
            className="dashboard__view-all"
          >
            View All Orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
