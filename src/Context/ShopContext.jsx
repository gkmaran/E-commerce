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
      setCartItem(savedCart.cartItem || []);
      setTotalQuantity(savedCart.totalQuantity || 0);
      setTotalPrice(savedCart.totalPrice || 0);
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

  const addToCart = (product) => {
    let updatedCart = [...cartItem];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    const newTotalQuantity = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.quantity * item.new_price, 0);

    setCartItem(updatedCart);
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);

    setMessage("Item Added To Cart");
    setTimeout(() => setMessage(""), 1000);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);

    const newTotalQuantity = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.quantity * item.new_price, 0);

    setCartItem(updatedCart);
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);

    localStorage.setItem("cartItem", JSON.stringify({ cartItem: updatedCart, totalQuantity: newTotalQuantity, totalPrice: newTotalPrice }));
  };

  const updateQuantity = ({ id, quantity }) => {
    const newQuantity = Math.max(1, quantity);

    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    const newTotalQuantity = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    const newTotalPrice = updatedCart.reduce((sum, item) => sum + item.quantity * item.new_price, 0);

    setCartItem(updatedCart);
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);

    localStorage.setItem("cartItem", JSON.stringify({ cartItem: updatedCart, totalQuantity: newTotalQuantity, totalPrice: newTotalPrice }));
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



