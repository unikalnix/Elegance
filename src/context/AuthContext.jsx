import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true)
    }
  }, [])

  const handleLogin = async (loginData, authMode) => {
    if (authMode === "signup") {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, loginData, {
          withCredentials: true, // Important for cookies
        });
        if (res.data.success) {
          setIsLogin(true);
          showToast("success", res.data.message);
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
          withCredentials: true, // Important for cookies
        });
        if (res.data.success) {
          setIsLogin(true);
          showToast("success", res.data.message);
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
