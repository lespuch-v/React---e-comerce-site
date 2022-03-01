import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import AllGames from './pages/AllGames';
import { ContextProvider } from './Context';
import Favorites from './pages/Favorites';
import Footer from "./components/Footer"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="allgames" element={<AllGames />} />
          <Route path="favorites" element={<Favorites />} ></Route>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
