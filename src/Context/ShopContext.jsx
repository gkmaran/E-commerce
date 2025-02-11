import React, { createContext, useState, useEffect } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItem"));
    if (savedCart) {
      setCartItem(savedCart.cartItem);
      setTotalQuantity(savedCart.totalQuantity);
      setTotalPrice(savedCart.totalPrice);
    }
  }, []);

  useEffect(() => {
    if (cartItem.length > 0) {
      localStorage.setItem(
        "cartItem",
        JSON.stringify({ cartItem, totalQuantity, totalPrice })
      );
    }
  }, [cartItem, totalQuantity, totalPrice]);
  // Add product to cart
  const addToCart = (product) => {
    let updatedCart = [...cartItem];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItem(updatedCart);
    setTotalQuantity((prev) => prev + 1);
    setTotalPrice((prev) => prev + product.new_price);

    setMessage("Item Added To Cart");
    setTimeout(() => setMessage(""), 1000);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const itemToRemove = cartItem.find((item) => item.id === id);
    if (!itemToRemove) return;

    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
    setTotalQuantity((prev) => prev - itemToRemove.quantity);
    setTotalPrice((prev) => prev - itemToRemove.new_price * itemToRemove.quantity);
  };

  const updateQuantity = ({ id, quantity }) => {
    const newQuantity = Math.max(1, quantity);

    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    const oldQuantity = cartItem.find((item) => item.id === id)?.quantity || 0;
    const priceDifference = (newQuantity - oldQuantity) * (cartItem.find((item) => item.id === id)?.new_price || 0);

    setCartItem(updatedCart);
    setTotalQuantity((prev) => prev + (newQuantity - oldQuantity));
    setTotalPrice((prev) => prev + priceDifference);
  };

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalQuantity,
    message,
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;


