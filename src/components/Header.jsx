import React from "react";
import { Link } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import SignUp from "./buttons/SignUp";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" className="  nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="  nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/product" className=" nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
             
            </ul>
            <Link to="/contact" className="navbar-brand fw-bold mx-auto text-center">
                  APPLE MART
                </Link>

                <Login/>
                <SignUp/>
                <CartBtn/>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Header;
