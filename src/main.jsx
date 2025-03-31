import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ToastProvider>
  </BrowserRouter>
);
