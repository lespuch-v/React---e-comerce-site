import React, { useContext, useState } from 'react';
import Footer from '../components/Footer';
import Image from '../components/Image';
import { Context } from '../Context';

export default function Cart() {
  const [orderText, setOrderText] = useState('Buy NOW!');
  const [orderComplete, setOrderComplete] = useState(false);
  const { allData, emptyCart } = useContext(Context);
  const cartItems = allData
    .filter((item) => item.isInCart === true)
    .map((imgs) => <Image key={imgs.id} img={imgs} />);

  const Ordering = () => {
    setOrderText('Ordering...');
    setTimeout(() => {
      setOrderText('Order placed!');
      setOrderComplete(true);
      emptyCart();
    }, 2000);
  };

  return (
    <div className="all-games-holder fix1 contact-main-cont">
      {orderComplete === false ? (
        <h1 className="fav-heading">
          {cartItems.length > 0 ? 'Cart' : 'Your Cart is EMPTY!'}
        </h1>
      ) : null}
      {cartItems}
      <div className="button-container">
        {cartItems.length > 0 ? (
          <button className="order-btn" onClick={Ordering}>
            {orderText}
          </button>
        ) : null}
        {orderComplete ? <h1>Thank you for your order!</h1> : null}
      </div>
    </div>
  );
}
