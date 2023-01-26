import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import Contact from "../pages/Contact";
import About from "../pages/About";

function Navbar() {
  return (
    <Router>
      <nav id="nav" class="navbar  navbar-expand-lg navbar-light ">
        <img
          className="companylogo"
          src="images/Ambience_realty.jpeg"
          alt="company_logo"
        />
        <Link id="navbar-brand" class="navbar-brand" to="/">
          Ambience Realty
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="  collapse navbar-collapse" id="navbarSupportedContent">
          <ul class=" navbar-nav  ms-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/properties">
                Properties
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Properties" element={<Properties />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </Router>
  );
}

export default Navbar;
