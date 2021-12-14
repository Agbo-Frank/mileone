import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header, Home, Brand, Product, About, Cart, Login, Footer } from './components';
import './app.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/brand" element={<Brand />}  />
        <Route exact path="/product" element={<Product />}  />
        <Route exact path="/about" element={<About />}  />
        <Route exact path="/cart" element={<Cart />}  />
        <Route exact path="/login" element={<Login />}  />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
