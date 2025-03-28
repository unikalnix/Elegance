// Imports
import React, { useState } from "react";
import "./AuthModal.css";
import { X } from "lucide-react";

// Component Function
const LoginModal = ({ isOpen, toggleAuthModal }) => {
  // Declarations
  const [fullName, setFullName] = useState("");
  const [userIdentifier, setUserIdentifier] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("");
  const [authMode, setAuthMode] = useState("signup");

  // Functions
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (authMode === "signup") {
      const userCredentials = {
        id: String(Date.now() * 5),
        fullName,
        userIdentifier,
        userPassword,
      };

      // Retrieve users from localStorage or initialize an empty array
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the username already exists
      const userExists = users.some(
        (user) => user.userIdentifier === userIdentifier
      );
      if (userExists) {
        alert("Username already taken! Please choose another.");
        return;
      }

      // Check if passwords match
      if (userPassword !== confirmUserPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Add new user and update localStorage
      users.push(userCredentials);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
      toggleAuthModal(); // Close modal
      window.dispatchEvent(new Event("storage")); // Notify listeners
    } else {
      // Login logic
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find(
        (user) =>
          user.userIdentifier === userIdentifier &&
          user.userPassword === userPassword
      );

      if (validUser) {
        localStorage.setItem("currentUser", JSON.stringify(validUser)); // Store logged-in user
        alert("Login successful!");
        toggleAuthModal(); // Close modal
        window.dispatchEvent(new Event("storage")); // Notify listeners
      } else {
        alert("Invalid credentials!");
      }
    }
  };

  // Return Component
  return (
    <>
      {isOpen && <div className="login-overlay"></div>}
      <div
        style={{
          height: authMode === "signup" ? "400px" : "300px",
        }}
        className={`login-modal ${isOpen ? "active" : ""}`}
      >
        <X
          style={{
            cursor: "pointer",
          }}
          onClick={toggleAuthModal}
        />
        <form className="login-modal__form" onSubmit={onSubmitHandler}>
          {authMode === "signup" && (
            <input
              className="login-modal__input"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Enter your full name"
              name="fullName"
            />
          )}
          <input
            className="login-modal__input"
            onChange={(e) => setUserIdentifier(e.target.value)}
            value={userIdentifier}
            type="text"
            placeholder="Username"
            name="userIdentifier"
          />
          <input
            className="login-modal__input"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            type="password"
            placeholder="Password"
            name="userPassword"
          />
          {authMode === "signup" && (
            <input
              className="login-modal__input"
              onChange={(e) => setConfirmUserPassword(e.target.value)}
              value={confirmUserPassword}
              type="password"
              placeholder="Confirm your password"
              name="confirmUserPassword"
            />
          )}
          <button
            className="login-modal__button login-modal__button--submit"
            type="submit"
          >
            {authMode === "signup" ? "Signup" : "Login"}
          </button>
        </form>
        <button
          className="login-modal__button login-modal__button--toggle"
          onClick={() =>
            setAuthMode(authMode === "signup" ? "login" : "signup")
          }
        >
          {authMode === "signup" ? "Switch to Login" : "Switch to Signup"}
        </button>
      </div>
    </>
  );
};

export default LoginModal;
