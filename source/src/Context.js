import { createContext, useEffect, useState } from 'react';
import data from './data';

let Context = createContext();

function ContextProvider({ children }) {
  const [allData, setAllData] = useState(data);
  const [cartItems, setCartItems] = useState([])


  function toggleFavorite(id){
    const updatedItems = allData.map((item) => {
      return id === item.id ? {...item, isFavourited: !item.isFavourited} : item
    })
    setAllData(updatedItems)
  }

  function toggleCart(id){
    console.log("TEST")
    console.log(id)
    const updatedCartItems = allData.map(item => {
      return id === item.id ? {...item, isInCart: !item.isInCart} : item
    })
    setAllData(updatedCartItems)
  }

  function addToCart(newItem){
    setCartItems(prevValue => [...prevValue, newItem])
  }
  function emptyCart(){
    setAllData(data)
  }




  return <Context.Provider value={{ allData, toggleFavorite, cartItems, addToCart, toggleCart, emptyCart }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
