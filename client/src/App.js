import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header, Home, Brand, Product, Footer } from './components';
// import './style.css';
import './app.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/brand" element={<Brand />}  />
        <Route exact path="/product" element={<Product />}  />
        {/* <Route exact path="" component={}  /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
