// import React, { useState } from 'react';
import Dell from "../assets/Dell.jpg";
import Asus from "../assets/Asus.jpg";
import Msi from "../assets/MSI1.jpg";
import Lenovo from "../assets/Lenovo1.png";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const ComputerModelShow = () => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const products = {
    dell: [
      {
        id: 1,
        name: "Dell Alienware M15 R7 ",
        specs: '(i7 12700H / 16GB / SSD 512GB PCIE / RTX3050Ti 4GB / 15.6"FHD)',
        img: "https://www.goldonecomputer.com/image/cache/catalog/Products/DELL/2022/Dell-Alienware-m15-R7-330x409.jpg",
      },
    ],
    asus: [
      {
        id: 3,
        name: "Asus ROG Strix G15 G513RC-HN101W",
        specs:
          " (R7 6800HS / 8GB / SSD 512GB PCIE / RTX3050 4GB / 15.6FHD,144Hz )",
        img: "https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/ROG-513RC-Grey-330x409.jpg",
      },
    
    ],
    msi: [

       {
        id: 4,
        name: "Asus ROG Strix G16 G614JU-N3252W ",
        specs:
          "( I7 13650HX / 16GB / SSD 512GB PCIE / RTX4050 6GB / 16FHD+,165Hz)",
        img: "https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/ROG-G614-1-330x409.jpg",
      },
    ],
    lenovo: [
      {
        id: 1,
        name: "Lenovo Legion 5 16IRX9 ",
        specs:
          "( i7-14650HX / 32GB / SSD 512GB PCIE / RTX4060 8GB / 16-2.5K,240Hz )",
        img: "https://www.goldonecomputer.com/image/cache/catalog/Products/LENOVO/2024/Gaming%20/Legion5-16IRX9-2-330x409.jpg",
      },
    ],
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="container">
      <h1
        className="text-center"
        style={{ fontFamily: "serif", backgroundColor: "goldenrod" }}
      >
        All Computer Model In Stock
      </h1>
      <div className="menu row">
        <div className="col">
          <img
            src={Dell}
            alt="Dell"
            onClick={() => handleBrandClick("dell")}
            className="img-fluid"
          />
        </div>
        <div className="col">
          <img
            src={Asus}
            alt="Asus"
            onClick={() => handleBrandClick("asus")}
            className="img-fluid"
          />
        </div>
        <div className="col">
          <img
            src={Msi}
            alt="MSI"
            onClick={() => handleBrandClick("msi")}
            className="img-fluid"
          />
        </div>
        <div className="col">
          <img
            src={Lenovo}
            alt="Lenovo"
            onClick={() => handleBrandClick("lenovo")}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="model-list row">
        {selectedBrand &&
          products[selectedBrand].map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="model-card card mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Specifications: {product.specs}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ComputerModelShow;
