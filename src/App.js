import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    
    <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
