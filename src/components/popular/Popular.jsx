import React from 'react'
import './Popular.css'
import data from '../Assets/data'
import Item from '../item/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h2>POPULAR IN WOMENS</h2>
        <hr />
        <div className="popular-item">
            {data.map((item)=>(
            <Item key={item.id} item={item}/>
            ))}
        </div> 
    </div>
  )
}

export default Popular
