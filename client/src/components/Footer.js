import { Facebook, Twitter, Instagram, LinkedIn} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
 
 const handleClick =(e)=>{
e.preventDefault();
window.location.reload(false);
 }
    return (
        <div>
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3 onClick={handleClick}>About<Link to="/"><span>Shoes Point</span></Link> </h3>
      <p className="footer-links">
        <Link to="/">Home</Link>
        |
        <Link to="/product">Products</Link>
        |
        <Link to ="/about">About</Link>
        |
        <Link to="/faqs">FAQs</Link>
      </p>
      <p className="footer-company-name">© 2021 Shoe Point.</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p><span>Lahore, Punjab, Pakistan</span>
         </p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>080060000</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p><a href="mailto:info@gmail.com">info@gmail.com</a></p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>The Shoes Point</span>
        Collection of different styles and design Shoes</p>
      <div className="footer-icons">
        
             <a href="https://web.facebook.com/" ><Facebook/></a>
         <a href="https://twitter.com/" ><Twitter/></a>
        <a href="https://www.instagram.com/" ><Instagram/></a> 
        <a href="https://www.linkedin.com/in/" ><LinkedIn/></a> 
        
      </div>
    </div>
  </footer>
</div>


    )
}

export default Footer
