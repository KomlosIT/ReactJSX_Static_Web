import React from "react";
import "../Menu/Laptop.css";

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

function App() {
  return (
    <div className="App">
      <h1
        className="text-center my-4"
        style={{ backgroundColor: "goldenrod", fontFamily: "serif" }}
      >
        Laptop Model
      </h1>
      <div className="container">
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/ROG-GA402XV-330x409.jpg"
            name="ASUS ROG Zephyrus G14 GA402XV-N2060W ( R9 7940HS / 16GB / SSD 1TB PCIE / RTX4060 8GB / 14-QHD,165Hz )"
            price="$1,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/LENOVO/2023/Notebook%20/Yoga-Book-9i-13IRU8-330x409.jpg"
            name="Lenovo Yoga S7 14IMH9 ( Ultra 7 155H / 16GB / SSD 1TB PCIE / 14-FHD+,OLED )"
            price="$1,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/MSI/MSI%202022/msi%20summit%20e14%2012th%20black%20-330x409.jpg"
            name="MSI Summit E14 Flip Evo A12MT-220KH (i7 1280P / 16GB / SSD 512GB PCIE / 14-FHD)"
            price="$1,349.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/MSI/2023/GAMING/Katana-17-B13VFK-2-330x409.jpg"
            name="MSI Katana 17 B13UDXK-1272KH ( I7 13620H / 16GB / SSD 512GB PCIE / RTX3050 6GB / 17.3-FHD,144Hz )"
            price="$899.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <div className="row">
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2022/UX9702AA-BLACK-330x409.jpg"
            name="Asus Zenbook 17 Fold OLED UX9702AA-MD007W (i7 1250U / 16GB / SSD 1TB PCIE / 17.3-2.5K)"
            price="$3,299.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VIC-ACRONYM-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VIC-MU003W ( I9 13900H / 32GB / SSD 1TB PCIE / RTX4070 8GB / 13.4-QHD)"
            price="$2,799.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GZ301VU-BLACK-330x409.jpg"
            name="Asus ROG Flow Z13 GZ301VV-MU013W ( I9 13900H / 16GB / SSD 1TB PCIE / RTX4060 8GB / 13.4-QHD,165Hz )"
            price="$2,099.00"
          />
          <ProductCard
            imageUrl="https://www.goldonecomputer.com/image/cache/catalog/Products/ASUS/2023/GAMING/GX650PY-Black-330x409.jpg"
            name="ASUS ROG Zephyrus Duo 16 GX650PY-NM042W ( R9-7945HX / 32GB / SSD 2T PCIE / RTX4090 16GB / 16-QHD,240Hz )"
            price="$4,399.00"
          />
          {/* Add more ProductCard components as needed */}
        </div>
      </div>
    </div>
  );
}

export default App;
