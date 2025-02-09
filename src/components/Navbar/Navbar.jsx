import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import './Navbar.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
function Navbar(){
    const[menu,setMenu]=useState("")
    const{totalQuantity}=useContext(ShopContext)
    return(
        <>
            <nav className="nav-bar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <p>Gk Cloth</p>
                </div>
                <ul className='nav-titles'>
                    <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu ==="shop" ? <hr/> :<></>}</li>
                    <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu ==="mens" ? <hr/> :<></>}</li>
                    <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu ==="womens" ? <hr/> :<></>}</li>
                    <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu ==="kids" ? <hr/> :<></>}</li>
                </ul>
                <div className="login-cart">
                    <Link to='/cart'><img src={cart} alt="cart"/></Link>
                    <div className="cart-count">{totalQuantity}</div>
                </div>
            </nav>
        </>
    )
}
export default Navbar