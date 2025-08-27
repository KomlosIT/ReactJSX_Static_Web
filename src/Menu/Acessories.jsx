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
const Acessories = () => {
  return (
    <div>
    <h1 style={{backgroundColor:"goldenrod", fontFamily:"serif"}}>Accessories</h1>
    <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div><div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/SSK-330x409.jpg"
            name="SSK 11 in 1 USB C Hub,Multiport USB Dock,USB C to Ethernet Adapter"
            price="$32.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories/Laptop%20Cooling%20Pads/CP%E2%80%90510-4-330x409.jpg"
            name="KEYBOARD ONIKUMA TZ5006 Combo Set (Keyboard, Mouse, Headset, Headset Stand, Mouse Pad)"
            price="$29.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Combo/TZ5006-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/hamerahead%20v2-1-330x409.jpg"
            name="LOGITECH RALLY PLUS EU PREMIUM ULTRA-HD CONFERENCE AUTOMATIC CAMERA CONTROL BLACK"
            price="$43.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        
  </div>
  );
};

export default Acessories;
