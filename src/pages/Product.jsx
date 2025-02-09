import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/Breadcrum/BreadCrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'

const Product = () => {
  const{all_product}=useContext(ShopContext)
  const{productId}=useParams();
  const product=all_product.find((item)=>item.id===Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
