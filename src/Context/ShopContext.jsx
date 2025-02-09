import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalQuantity,setTotalQuantity]=useState(0)
  const [totalPrice,setTotalPrice]=useState(0)  

  const addToCart = (product) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart , {...product ,quantity :1}]
      }
    });
    setTotalQuantity((prevQuantity)=>prevQuantity + 1)
    setTotalPrice((prevPrice)=>prevPrice + product.new_price)
  };
  const removeFromCart=(id)=>{
    setCartItem((prevCart)=>{
        const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        setTotalQuantity((prevQuantity)=>prevQuantity - existingItem.quantity)
        setTotalPrice((prevPrice)=>prevPrice - (existingItem.new_price *existingItem.quantity))
        return prevCart.filter((item)=>item.id !== id)
    }
        return prevCart;
    })
  }

  const contextValue = { all_product, cartItem, addToCart ,totalPrice ,totalQuantity,removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
