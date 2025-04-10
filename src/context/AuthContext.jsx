import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useCart } from "./CartContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const { showToast } = useToast();
  const {getCart} = useCart();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true)
    }
  }, [])

  const handleLogin = async (loginData, authMode) => {
    const cartData = JSON.parse(localStorage.getItem("_ucd") || "[]");
    if (authMode === "signup") {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, { ...loginData, guestCart: cartData }, {
          withCredentials: true,
        });
        if (res.data.success) {
          setIsLogin(true);
          showToast("success", res.data.message);
          await getCart();
          return true;
        } else {
          showToast("error", res.data.message);
          return false;
        }
      } catch (error) {
        showToast('error', `Something went wrong ${error}`);
        return false;
      }
    } else if (authMode === "login") {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, loginData, {
          withCredentials: true,
        });
        if (res.data.success) {
          setIsLogin(true);
          showToast("success", res.data.message);
          await getCart();
          return true;
        } else {
          showToast("error", res.data.message);
          return false;
        }
      } catch (error) {
        showToast('error', `Something went wrong ${error}`);
        return false;
      }
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, { withCredentials: true });
      if (res.data.success) {
        setIsLogin(false);
        showToast("info", res.data.message);
        await getCart();
      } else {
        showToast("error", res.data.message);
      }

    } catch (error) {
      showToast('error', `Something went wrong ${error}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
