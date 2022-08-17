import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <section className="content-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </section>
  );
};

export default Main;
