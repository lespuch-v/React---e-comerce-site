import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import cartEmpty from '../images/cart/cart-empty.png';
import cartFull from "../images/cart/cart-full.png"
import contactLogo from '../images/icons/contact.svg';
import siteAbout from '../images/icons/siteAbout.svg';
import gamelogo from '../images/icons/gamelogo.svg';
import likeLogo from '../images/icons/like.svg';
import { Context } from '../Context';

export default function Navbar() {
  const { allData } = useContext(Context);
  const cartItems = allData
    .filter((item) => item.isInCart === true )
    console.log("Navbar --- ",cartItems)
  
  const cartImage = cartItems.length > 0 ? cartFull : cartEmpty


  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-right-side">
          <h3>Game Shop</h3>
          <img src={gamelogo} className="mygameLogo" alt="just a game" />
        </div>
      </Link>
      <div className="navbar-left-side">
        <Link to="/allgames">
          <button className="btn">
            All Games
            <img src={siteAbout} alt="About website" />
          </button>
        </Link>

        <Link to="/favorites">
          <button className="btn">
             
            <img className='like-logo' src={likeLogo} alt="like-logo" />
          </button>
        </Link>

        <Link to="/contact">
          <button className="btn">
            Contact
            <img src={contactLogo} alt="Contact information" />
          </button>
        </Link>
        <Link to="/about">
          <button className="btn">
            About
            <img src={siteAbout} alt="About website" />
          </button>
        </Link>
        <Link to="/cart">
          <button className="btn">
            <img className='like-logo' src={cartImage} alt="Cart section" />
          </button>
        </Link>
      </div>
    </div>
  );
}
