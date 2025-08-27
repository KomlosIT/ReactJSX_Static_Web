import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const First = () => {
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="col-sm-8-center">
        <h1 style={{ fontFamily: "serif" }}>Information About Us</h1>
        <h5>Product original from Cpmpany </h5>
        <div className="image-container">
          All Model that we have is have warranty 1year-3year from company. if
          have problem or not work will get free service or change new one.Have
          any question please contact to us! Thanks..
        </div>
        <div className="carousel">
          <div className="carousel-inner">
            <Carousel>
              <div>
                <img
                  src="https://dlcdnrog.asus.com/rog/media/1706667593605.webp"
                  alt="First slide"
                />
                <p className="legend">Model For Gaming Asus ROG</p>
              </div>
              <div>
                <img
                  src="https://cdn.mos.cms.futurecdn.net/vg82UT8YWRpjibNB77SoLT.jpg"
                  alt="First slide"
                />
                <p className="legend">Model For Gaming AlienWare</p>
              </div>
              <div>
                <img
                  src="https://storage-asset.msi.com/global/picture/news/2023/hq/ces2024-20231222-6.jpg"
                  alt="First slide"
                />
                <p className="legend">Model For Gaming MSI Katana</p>
              </div>
              <div>
                <img
                  src="https://dlcdnrog.asus.com/rog/media/1707286819846.webp"
                  alt="Second slide"
                />
                <p className="legend">Model For Office</p>
              </div>
              <div>
                <img
                  src="https://dlcdnrog.asus.com/rog/media/1708556777726.webp"
                  alt="Third slide"
                />
                <p className="legend">Model For Studio</p>
              </div>
              <div>
                <img
                  src="https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/240213%20Jonsbo%20MOD%203%20copy%201-915x420.jpg"
                  alt="Fourth slide"
                />
                <p className="legend">Desktop For Gaming And Design</p>
              </div>
              <div>
                <img
                  src="https://i.ytimg.com/vi/utMV52k0quo/maxresdefault.jpg"
                  alt="Fourth slide"
                />
                <p className="legend">Desktop For Gaming And Design</p>
              </div>
            </Carousel>
          </div>
        </div>
        <br />
        <h2 style={{ fontFamily: "serif", backgroundColor: "goldenrod" }}>
          Supplier for our product
        </h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div className="fakeimg">Fake Image</div>
        <div className="carousel">
          <div className="carousel-inner">
            <Carousel>
              <div>
                <img
                  src="https://dlcdnrog.asus.com/rog/media/168080574510.webp"
                  alt="First slide"
                />
                <p className="legend" style={{ fontSize: "30px" }}>
                  Asus
                </p>
              </div>
              {/* <div>
                <img
                  src="https://wallpapers.net/msi-gaming-series-logo-full-hd-wallpaper-for-desktop-mobiles/download/1600x1200.jpg"
                  alt="Second slide"
                />
                <p className="legend" style={{ fontSize: "30px" }}>
                  MSI
                </p>
              </div> */}
              <div>
                <img
                  src="https://cdn.dribbble.com/users/525700/screenshots/6344092/lenovo-logo-design_4x.png"
                  alt="Third slide"
                />
                <p className="legend" style={{ fontSize: "30px" }}>
                  Lenovo
                </p>
              </div>
              <div>
                <img
                  src="https://wallpaperfx.com/view_image/dell-black-background-1600x1200-wallpaper-411.jpg"
                  alt="Fourth slide"
                />
                <p className="legend" style={{ fontSize: "30px" }}>
                  Dell
                </p>
              </div>
            </Carousel>
          </div>
        </div>
          </div><div className="container mt-5">
            <div className="row">
              <div className="col-sm-4">
                <h3>Desktop Gaming</h3>
                <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Custom%20PC/445-330x409.png" alt=""style={{width:"250px"}} />
                <p>
                Desktop Gaming / Design i3 13100F / Ram 16GB / M.2 PCIe 512GB / GTX1650 4GB 
                </p>
              </div>
              <div className="col-sm-4">
                <h3>Desktop Gaming</h3>
                <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Custom%20PC/1039-330x409.png" alt="" style={{width:"250px"}}/>
                <p>
                Desktop Gaming / Design ( i7 13700F / Ram 16GB / M.2 PCIe 1TB / RTX4060 8GB)
                </p>
               
              </div>
              <div className="col-sm-4">
                <h3>Desktop Gaming</h3>
                <img src="https://www.goldonecomputer.com/image/cache/catalog/Products/Custom%20PC/1545-330x409.png" alt="" style={{width:"250px"}}/>
                <p>
                High End Desktop Gaming / Design ( Ryzen 9 7900X / Ram 32GB DDR5 / M.2 PCIe 1TB / Asus Dual RTX4070 12GB )
                </p>
               
              </div>
            </div>
          </div>
        </div>
    
  );
};

export default First;
