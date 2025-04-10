import { createContext, useContext, useState } from "react";
import { useToast } from "./ToastContext";
import axios from "axios";
import Cookies from "js-cookie";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishListData, setWishListData] = useState([]);
  const { showToast } = useToast();

  const getCart = async () => {
    const token = Cookies.get("token");
    if (token) {
      JSON.parse(localStorage.getItem("_ucd")) && localStorage.setItem("_ucd", JSON.stringify([]));
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart/get`, { withCredentials: true });
        if (res.data.success) {
          setCartData(res.data.cart);
        } else {
          showToast("error", res.data.message);
        }
      } catch (error) {
        showToast("error", error);
      }
    } else {
      setCartData(JSON.parse(localStorage.getItem("_ucd") || []));
    }

  };

  const addToCart = async ({ _id, colors, sizes, quantity = 1, image, price, title }) => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart/add`, { _id, quantity, size: sizes, color: colors }, { withCredentials: true });
        await getCart();
        if (res.data.success) {
          showToast("success", res.data.message);
        } else {
          showToast("error", res.data.message);
        }
      } catch (error) {
        showToast("error", error);
      }
    } else {
      const cartData = JSON.parse(localStorage.getItem("_ucd")) || [];
      const index = cartData.findIndex(item => item.productId === _id);
      if (index !== -1) {
        cartData[index].size = sizes;
        cartData[index].color = colors;
        cartData[index].quantity += quantity;
      } else {
        cartData.push({ productId: _id, title, size: sizes, color: colors, quantity, image, price })
      }

      localStorage.setItem("_ucd", JSON.stringify(cartData))
      setCartData(cartData);
      showToast("success", "Item added to cart")

    }

  };

  const removeFromCart = async (_id) => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart/remove`, { _id }, { withCredentials: true });
        await getCart();
        if (res.data.success) {
          showToast("info", res.data.message);
        } else {
          showToast("error", res.data.message);
        }
      } catch (error) {
        showToast("error", error);
      }
    } else {
      const cartData = JSON.parse(localStorage.getItem("_ucd")) || [];
      const updatedCart = cartData.filter(item => item.productId !== _id);
      localStorage.setItem("_ucd", JSON.stringify(updatedCart));
      setCartData(updatedCart)
      showToast("info", "Item removed")
    }

  };

  const updateCart = async (updatedCart) => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart/update`, updatedCart, { withCredentials: true });
        if (res.data.success) {
          showToast("success", res.data.message);
          await getCart();
        } else {
          showToast("error", res.data.message);
        }
      } catch (error) {
        showToast("error", error);
      }
    } else {
      if (cartData.length > 0) {
        const cartData = JSON.parse(localStorage.getItem("_ucd")) || [];
        for (let i = 0; i < cartData.length; i++) {
          cartData[i].quantity = updatedCart[i].quantity;
          // cartData[i].totalPrice = parseFloat(cartData[i].quantity * cartData[i].price);
        }

        localStorage.setItem("_ucd", JSON.stringify(cartData));
        showToast("success", "Cart updated")
      } else {
        showToast("info", "Your cart is empty")
      }


    }
  };

  const addToWishList = ({ _id, image, title, inStock, price }) => {
    setWishListData((prev) => {
      if (!prev) return prev;
      const existingItem = prev.find((item) => item._id === _id);
      if (!existingItem) {
        showToast(
          "success",
          "Added to your wishlist. Grab it before it’s gone!"
        );
        return [
          ...prev,
          {
            _id,
            image,
            title,
            inStock,
            price,
          },
        ];
      }
      showToast("info", "Item is already in your wishlist");
      return prev;
    });
  };

  const removeFromWishList = (id) => {
    setWishListData((prev) => {
      if (!prev) return prev;
      const updatedWishList = wishListData.filter((item) => item._id !== id);
      return updatedWishList;
    });
    showToast("info", "Wishlist updated! Hope you find something better.");
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateCart,
        cartData,
        wishListData,
        addToWishList,
        removeFromWishList,
        getCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
