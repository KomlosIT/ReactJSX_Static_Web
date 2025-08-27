import First from "../Menu/First";
import Laptop from "../Menu/Laptop";
import Desktop from "../Menu/Desktop";
import Acessories from "../Menu/Acessories";
import Monitor from "../Menu/Monitor";
import SparePart from "../Menu/Sparepart";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import Pic1 from "../assets/Pic01.jpg";
import Bden from "../assets/Bden.jpg";
import Bong from "../assets/Bong.jpg";
import Hong from "../assets/Hong.jpg";
import Li from "../assets/Li.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStar,
  faLaptop,
  faDesktop,
  faTv,
  faKeyboard,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
function Home() {
  const [currentPage, setCurrentPage] = useState("first");
  const renderPage = () => {
    switch (currentPage) {
      case "laptop":
        return <Laptop />;
      case "desktop":
        return <Desktop />;
      case "acessories":
        return <Acessories />;
      case "monitor":
        return <Monitor />;
      case "sparepart":
        return <SparePart />;
      default:
        return <First />;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <h2 className="creator-title">Creator By Komlos IT</h2>
          <h5 className="creator-subtitle">Single Sl Ban</h5>
          <Carousel>
            <div>
              <img src={Pic1} alt="General Manager" />
              <p className="legend">General Manager</p>
            </div>
            <div>
              <img src={Li} alt="Service Supervisor" />
              <p className="legend">Service Supervisor</p>
            </div>
            <div>
              <img src={Bong} alt="Marketing Supervisor" />
              <p className="legend">Marketing Supervisor</p>
            </div>
            <div>
              <img src={Hong} alt="Sales Supervisor" />
              <p className="legend">Sales Supervisor</p>
            </div>
            <div>
              <img src={Bden} alt="Stock Supervisor" />
              <p className="legend">Stock Supervisor</p>
            </div>
          </Carousel>
          <div className="categories">
            <h3 style={{ fontFamily: "serif", backgroundColor: "goldenrod" }}>
              <FontAwesomeIcon
                icon={faBars}
                style={{ backgroundColor: "white" }}
              />{" "}
              CATEGORIES
            </h3>
            <button type="button" onClick={() => setCurrentPage("first")} style={{fontFamily:"serif"}}>
              <FontAwesomeIcon icon={faStar} /> General
            </button>
            <button type="button" onClick={() => setCurrentPage("laptop")} style={{fontFamily:"serif"}}>
              <FontAwesomeIcon icon={faLaptop} /> Laptop
            </button>
            <button type="button" onClick={() => setCurrentPage("desktop")} style={{fontFamily:"serif"}}>
              <FontAwesomeIcon icon={faDesktop} /> Desktop
            </button>
            <button type="button" onClick={() => setCurrentPage("monitor")} style={{fontFamily:"serif"}}>
              <FontAwesomeIcon icon={faTv} /> Monitor
            </button>
            <button type="button" onClick={() => setCurrentPage("acessories")} style={{fontFamily:"serif"}}>
              <FontAwesomeIcon icon={faKeyboard} /> Accessories
            </button>
            <button type="button" onClick={() => setCurrentPage("sparepart")} style={{fontFamily:"serif"}}>
              <FontAwesomeIcon icon={faMicrochip} /> Spare Part
            </button>
          </div>
          <h3 className="all-products-title">Popular Product</h3>
          <div className="container">
      <div className="product-list">
        <div className="product-item text-center">
          <img
            src="https://www.goldonecomputer.com/image/cache/catalog/Products/Monitor%20Dell/Dell-U2424H-80x80.jpg"
            alt="Dell U2424H monitor"
            className="img-fluid"
          />
          <p>
            Dell U2424H (24" / FHD / 120Hz / IPS / USB-C /100% sRGB, 100%
            BT.709, 85% DCI-P3, Delta E2)
          </p>
        </div>
        <div className="product-item text-center">
          <img
            src="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/TUF-FA707RM-RC-GREY-2-80x80.jpg"
            alt="ASUS TUF Gaming"
            className="img-fluid"
          />
          <p>
            ASUS TUF Gaming F17 FX707VI-HX084W (I7 13620H / 16GB / SSD 1TB
            PCIE / RTX4070 8GB / 17.3"FHD,144Hz)
          </p>
        </div>
        <div className="product-item text-center">
          <img
            src="https://www.goldonecomputer.com/image/cache/catalog/Products/LENOVO/2024/Gaming%20/LOQ-15IRX9-80x80.jpg"
            alt="Lenovo LOQ"
            className="img-fluid"
          />
          <p>
            Lenovo LOQ 15IRX9 (i7 13650HX / 16GB / 512GB / RTX4050 6GB /
            15.6"FHD 144Hz)
          </p>
        </div>
      </div>
    </div>
          
        </div>
        <div className="col-sm-8">{renderPage()}</div>
      </div>
    </div>
  );
}

export default Home;
