import React, { useContext, useState } from 'react';
import './CartDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartDisplay = () => {
  const { cartItem, totalPrice, removeFromCart, updateQuantity } = useContext(ShopContext);
  const [toastMessage, setToastMessage] = useState("");
  
  const gstRate = 0.18;
  const gst = totalPrice * gstRate;
  const total = totalPrice + gst;

  const handleQuantityUpdate = (id, newQuantity) => {
    if (newQuantity < 1) {
      setToastMessage("Quantity cannot be less than 1!");
      setTimeout(() => setToastMessage(""), 2000); 
      return;
    }
    updateQuantity({ id, quantity: newQuantity });
  };

  return (
    <div className="cartdisplay">
      {toastMessage && <div className="toast-message">{toastMessage}</div>}

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.length > 0 ? (
            cartItem.map((item) => (
              <tr key={item.id}>
                <td>
                  <img className="cartdisplay-icon" src={item.image} alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>${item.new_price}</td>
                <td>
                  <div className='updatequantity'>
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                    >-</button>
                    {item.quantity}
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity({ id: item.id, quantity: item.quantity + 1 })}
                    >+</button>
                  </div>                
                </td>
                <td>${(item.new_price * item.quantity).toFixed(2)}</td>
                <td>
                  <img onClick={() => removeFromCart(item.id)} className="cartdisplay-remove" src={remove_icon} alt="Remove" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                <h1 className='emptymsg'>Cart is empty</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="cartdisplay-down">
        <div className="cartdisplay-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartdisplay-total-item">
              <p>SubTotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className="cartdisplay-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cartdisplay-total-item">
              <p>GST</p>
              <p>{gst.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartdisplay-total-item">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartdisplay-promocode">
          <p>If Have A Promo Code, Enter It Here</p>
          <div className="cartdisplay-promobox">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;
