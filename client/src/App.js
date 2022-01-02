import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Brand, Product, About, Cart, Login, Wishlist, Settings, VendorProduct, Pricing, Footer } from './components';
import NavBar from './components/NavBar/NavBar'
import { AuthVar } from './Apollo/reactiveVar/Auth';
import './app.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  const loggedIn = AuthVar()[0]?.token
  
  return (
    <>
      <Routes>
        {/* <Navigate from="/login" to="/" /> */}
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/brand/:id" element={<Brand />}  />
        <Route exact path="/product/:id" element={<Product />}  />
        <Route exact path="/about" element={<About />}  />
         <Route exact path="/cart" element={<Cart />}  />
        <Route exact path="/login" element={<Login />}  />
        <Route exact path="/wishlist" element={<Wishlist />}  />
        <Route exact path="/vendor/settings" element={<Settings />}  />
        <Route exact path="/vendor/pricing" element={<Pricing />}  />
      </Routes>
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
