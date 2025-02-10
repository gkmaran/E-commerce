import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item.jsx'
import './Css/ShopCategory.css'
const Shopcategory = (props) => {
  const{all_product}=useContext(ShopContext)
  return (
    <div className='shopcategory'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
          <p>
            <span>Showing 1-12</span>out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="dropdown" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item)=>{
            if(props.category === item.category){
              return <Item key={item.id} item={item}/>
            }
            else{
              return null;
            }
          })}
        </div>
    </div>
  )
}

export default Shopcategory
