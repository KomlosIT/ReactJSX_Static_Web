import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductCard = ({ imageUrl, name, price }) => (
  <div className="col-12 col-md-6 col-lg-3 mb-4">
    <div className="card h-1000">
      <img
        src={imageUrl}
        alt={name}
        className="card-img-top fixed-size-image"
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{name}</h5>
        <p className="card-text">{price}</p>
      </div>
    </div>
  </div>
);
const SparePart = () => {
  return (
<div>
      <h1 style={{backgroundColor:"goldenrod", fontFamily:"serif"}}>SparePart</h1>
      <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Graphic%20Card/ROG-RTX4090-330x409.jpg"
            name="ASUS ROG-STRIX-RTX4090 OC Edition 24GB GDDR6X ( 24GB GDDR6X )"
            price="$2,599.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Ram/Corsair%20VENGEANCE%20RGB%20DDR5%20Black%2064GB-330x409.jpg"
            name="G-Skill TRIDEN Z5 RGB DDR5 6000MHz 32GB Single ( 32GB DDR5 / 6000MHz )"
            price="$209.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Cooler/Liquid/MPG%20CORELIQUID%20K360-330x409.jpg"
            name="MPG CORELIQUID K360 ( Liquid Cooling Dual Fans / Support Intel and AMD CPU)"
            price="$255.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Motherboard/ASUS-ROG-MAXIMUS-Z790-DARK-HERO-330x409.jpg"
            name="ASUS ROG MAXIMUS Z790 DARK HERO ( LGA 1700 / 4xDDR5 Slots / M.2 PCIe 4.0 / wifi 7 + Bluetooth )"
            price="$599.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        
    </div>
    
  );
};

export default SparePart;
