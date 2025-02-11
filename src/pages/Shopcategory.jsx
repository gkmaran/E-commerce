import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/Item.jsx";
import "./Css/ShopCategory.css";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortType, setSortType] = useState(""); 
  const handleSortChange = (type) => {
    console.log(type)
    setSortType(type);
  };

  let filteredProducts = all_product.filter(
    (item) => props.category === item.category
  );

  if (sortType === "price-low-high") {
    filteredProducts.sort((a, b) => a.new_price - b.new_price);
  } else if (sortType === "price-high-low") {
    filteredProducts.sort((a, b) => b.new_price - a.new_price);
  } 

  return (
    <div className="shopcategory">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing {filteredProducts.length}</span> products out of 32
        </p>
        <div className="shopcategory-sort-container">
          <label>Sort by:</label>
          <select onChange={(e) => handleSortChange(e.target.value)}>
            <option value="">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shopcategory;

