import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import heartFull from '../images/icons/heart-full.svg';
// import cartEmpty from '../images/cart/cartPlus.jpg';
import cartChecked from '../images/cart/cartChecked.jpg';
import buyButton from '../images/cart/buy.png';

function Image({ img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, toggleCart } = useContext(Context);

  // Cart Icon Hovered STYLE
  const stylesHover = {
    backgroundColor: hovered ? 'white' : null,
    borderRadius: '10px',
    width: '70px',
    height: '70px',
    transition: '250ms all',
  };

  function heartIcon() {
    if (img.isFavourited) {
      return (
        <img
          className="heart-icon"
          src={heartFull}
          alt="fun imgs"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    }
  }
  function cartIcon() {
    if (img.isInCart) {
      return (
        <img
          style={stylesHover}
          className="cart-icon"
          src={cartChecked}
          onClick={() => toggleCart(img.id)}
          alt="cart items"
        />
      );
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="all-images"
    >
      {hovered ? (
        <img
          className="heart-icon"
          src={heartFull}
          alt="fun imgs"
          onClick={() => toggleFavorite(img.id)}
        />
      ) : null}
      {heartIcon()}

      {hovered ? (
        <img

          className="cart-icon"
          src={buyButton}
          onClick={() => toggleCart(img.id)}
          alt="cart icon"
        />
      ) : null}
      {cartIcon()}
      <img className="image-start" src={img.img} alt="fun imgs" />
      <h2 className='image-title'>{img.name}</h2>
    </div>
  );
}

export default Image;
