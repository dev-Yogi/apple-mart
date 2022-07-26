import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Route, BrowserRouter, Routes, Navigate, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

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
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
