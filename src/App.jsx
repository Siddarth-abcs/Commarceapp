import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Home from './components/BestSellingProduct/Home';
import Cart from './components/Cart';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import { Notfound } from './components/Notfound/Notfound';
import { About } from './components/About/About';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path="/About" element={<About />} />
          <Route path='*' element={<Notfound/>} />
          {/* Other routes */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
