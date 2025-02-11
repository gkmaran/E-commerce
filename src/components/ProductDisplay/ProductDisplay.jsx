import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = ({product}) => {
    const{addToCart,message}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="productimg" />
                <img src={product.image} alt="productimg" />
                <img src={product.image} alt="productimg" />
                <img src={product.image} alt="productimg" />
            </div>
            <div className="productdisplay-main-img">
                <img src={product.image} alt="productimg" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-prices">
                <div className="productdisplay-price-old">${product.old_price}</div>
                <div className="productdisplay-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-description">
            Simple, plain, or graphic t-shirts and polos are widely worn by both men and women.
            Denim jeans, chinos, and joggers are common choices for everyday wear.
            Ideal for casual and cold-weather wear, these are popular among all genders.
            </div>
            <div className="productdisplay-size">
                <h1>Select Size</h1>
                <div className="productdisplay-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product)}}>ADD TO CART</button>
            {message && <p className='cartaddedmsg'>{message}</p>}
        </div>
      
    </div>
  )
}

export default ProductDisplay
