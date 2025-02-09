import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="footer" />
        <p>GK CLOTH</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icons">
        <div className="icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="icon-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="copyrights">
        <hr />
        <p>Copyright &copy; 2025 GK CLOTH. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
