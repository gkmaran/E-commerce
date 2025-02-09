import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({item}) => {
  return (
    <div className='item'>
        <Link to={`/products/${item.id}`}><img onClick={()=>window.scrollTo({top: 100,behavior: "smooth" })} src={item.image} alt="" /></Link>
        <p>{item.name}</p>
        <div className='item-prices'>
            <div className='new-price'>
                <p>${item.new_price}</p>
            </div>
            <div className='old-price'>
                <p>${item.old_price}</p>
            </div>
        </div>
    </div>
  )
}

export default Item
