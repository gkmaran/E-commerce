import React, { useContext } from 'react';
import './CartDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartDisplay = () => {
  const { cartItem, totalPrice, removeFromCart } = useContext(ShopContext);
  const gstRate=0.18;
  const gst=totalPrice*gstRate;
  const total=totalPrice + gst ;

  return (
    <div className="cartdisplay">
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
                <td>{item.quantity}</td>
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

      {/* {cartItem.length > 0 && (
        <div className="cartdisplay-total">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )} */}
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
                    <p>{gst}</p>
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
            <p>If Have A Promo Code , Enter It Here</p>
            <div className="cartdisplay-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;

