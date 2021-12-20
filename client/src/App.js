import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home, Brand, Product, About, Cart, Login, Wishlist, Settings, VendorProduct, Pricing, Footer } from './components';
import './app.css'

function App() {
  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/brand" element={<Brand />}  />
        <Route exact path="/product" element={<Product />}  />
        <Route exact path="/about" element={<About />}  />
        <Route exact path="/cart" element={<Cart />}  />
        <Route exact path="/login" element={<Login />}  />
        <Route exact path="/wishlist" element={<Wishlist />}  />
        <Route exact path="/vendor/settings" element={<Settings />}  />
        <Route exact path="/vendor/product" element={<VendorProduct />}  />
        <Route exact path="/vendor/pricing" element={<Pricing />}  />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
