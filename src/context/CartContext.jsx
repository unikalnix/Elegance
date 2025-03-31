import { createContext, useContext, useState } from "react";
import { collection } from "../assets/data";
import { useToast } from "./ToastContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishListData, setWishListData] = useState([]);
  const { showToast } = useToast();

  const addToCart = ({ _id, image = null, colors = [], sizes = [], quantity = 1 }) => {
    const selectedItem = collection.find((item) => item._id === _id);
    if (!selectedItem) return;

    setCartData((prev) => {
      const existingItem = prev.find((item) => item._id === _id);
      if (existingItem) {
        return prev.map((item) =>
          item._id === _id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          _id,
          title: selectedItem.title,
          image,
          colors,
          sizes,
          quantity,
          price: selectedItem.price,
        },
      ];
    });

    showToast("success", "Added! Check your cart for details.");
  };

  const removeFromCart = (_id) => {
    setCartData((prev) => prev.filter((item) => item._id !== _id));
    showToast("info", "Removed! Let us know if you change your mind.");
  };

  const updateCart = (updatedCart) => {
    setCartData(updatedCart);
    showToast("success", "Changes saved! Ready to checkout?");
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
