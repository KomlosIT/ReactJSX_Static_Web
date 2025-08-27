// import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Model from "./Header/Model";
import Service from "./Header/service";
import Contact from "./Header/Contact";
import Home from "./Header/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import your custom styles
import Logo from "./assets/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faWrench,
  faDesktop,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {  faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <Router className="main-form">
      <div className="web-container" style={{color:"white"}}>
      <header>
        <div className="container d-flex justify-content-between align-items-center header-section">
          <img src={Logo} alt="Logo" className="logo" />
          <a href="/" className="store-name">
            Welcome Komlos IT Store
          </a>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <nav className="nav-section d-flex align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/model" className="nav-link">
                <FontAwesomeIcon icon={faDesktop} /> Model
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                <FontAwesomeIcon icon={faWrench} /> Service
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="text-center banner-section">
        <img
          src="https://www.goldonecomputer.com/image/catalog/Banner%20and%20Slide/230831%20Free%20Delivery%201.jpg"
          alt="Promotion"
          className="banner-image"
        />
      </div>
      <div className="Main-Menu">
      <div className="container content-section">
        <Routes
          style={{
            marginLeft: '4rem',
            marginRight: '4rem',
            '@media (max-width: 768px)': {
              marginLeft: '2rem',
              marginRight: '2rem',
            },
            '@media (max-width: 480px)': {
              marginLeft: '1rem',
              marginRight: '1rem',
            },
          }}
        >
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </div>
      </div>
     <footer className="bg-dark text-light pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center mb-3">
            <img
              src={Logo}
              alt="Gold One Computer"
              className="img-fluid mb-2"
            />
            <p>Komlos IT Stores</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Contact & Address</a></li>
              <li><a href="#" className="text-light">Delivery Info</a></li>
              <li><a href="#" className="text-light">Installment (តម្កល់ប្រាក់រំលស់)</a></li>
              <li><a href="#" className="text-light">Brands</a></li>
              <li><a href="#" className="text-light">Site Map</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Email Contacts</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                For product inquiry: <a href="mailto:sales@goldonecomputer.com" className="text-light">sales@goldonecomputer.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                For marketing & corporate opportunity: <a href="mailto:goldonecomputer@gmail.com" className="text-light">goldonecomputer@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Shop Address</h5>
            <address>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              No. 405-407E0, Kampuchea Krom Blvd. (ST.128) Sangkat Phsar Depor 3, Khan Toul Kork, Phnom Penh, Cambodia.
            </address>
            <a href="#" className="text-light">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Sales & Service Contacts
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <a href="https://facebook.com" className="text-light mx-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="text-light mx-2">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-light mx-2">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center py-2">
        <p className="mb-0">&copy; 2024, Komlos IT Stores. All Rights Reserved.</p>
      </div>
    </footer>
    </Router>
  );
}

export default App;
