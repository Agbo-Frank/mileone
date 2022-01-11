import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import {Alert} from './components/Alert/Alert'
import LoginPop from './components/LoginPop/LoginPop'
import { Home, Brand, Product, About, Cart, Login, Wishlist, Settings, VendorProduct, Pricing, Footer } from './components';
import NavBar from './components/NavBar/NavBar'
import Products from './components/pages/Products/Product'
import './app.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  
  return (
    <>
      <Header />
      <Search />
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/brand/:id" element={<Brand />}  />
        <Route exact path="/products/:category" element={<Products />}  />
        <Route exact path="/product/:id" element={<Product />}  />
        <Route exact path="/about" element={<About />}  />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />}  />
        <Route exact path="/wishlist" element={<Wishlist />}  />
        <Route exact path="/vendor/settings" element={<Settings />}  />
        <Route exact path="/vendor/pricing" element={<Pricing />}  />
      </Routes>
      <LoginPop />
      <Alert />
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
