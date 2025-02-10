import React from 'react'
import './RelatedProduct.css'
import newcollection from '../Assets/new_collections'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-item">
            {newcollection.map((item)=>{
                return <Item key={item.id} item={item}/>
            })}
      </div>
    </div>
  )
}

export default RelatedProduct
