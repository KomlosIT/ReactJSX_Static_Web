import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Pic1 from "../assets/Pic01.jpg";
import Bden from "../assets/Bden.jpg";
import Bong from "../assets/Bong.jpg";
import Hong from "../assets/Hong.jpg";
import Li from "../assets/Li.jpg";
// import Team from "../assets/Team"
const FourColumnLayout = () => {
  return (
    <div className="container">
      <h1
        className="text-ceenter"
        style={{ fontFamily: "serif", textAlign: "center" }}
      >
        Welcome to our service Team
      </h1>
      <Carousel>
        <div>
          <img
            src="https://www.epfl.ch/schools/sb/research/iphys/wp-content/uploads/2022/05/it-service-1536x864.jpg"
            alt="First slide"
          />
          <p className="legend">Welcome to Komlos IT service</p>
        </div>
        <div>
          <img
            src="https://content.jdmagicbox.com/comp/delhi/x9/011pxx11.xx11.240219150154.m1x9/catalogue/g-m-technology-india-naraina-village-cb-block-delhi-computer-repair-and-services-ngfmtey8wy.jpg"
            alt="First slide"
          />
          <p className="legend">Other Service</p>
        </div>
        <div>
          <img
            src="https://www.computerrepairswaterford.com.au/wp-content/uploads/2021/08/desktop-computer-repair-service.jpg"
            alt="First slide"
          />
          <p className="legend">Build Computer custom</p>
        </div>
        <div>
          <img
            src="https://mobile-pc-medics.com/wp-content/uploads/2021/06/computer_maintenance.jpg"
            alt="Second slide"
          />
          <p className="legend">Maintanance Service</p>
        </div>
        {/* <div>
          <img
            src="https://giftnet.com.au/wp-content/uploads/2023/08/laptop-repair-services.jpg"
            alt="Third slide"
          />
          <p className="legend">Repair all computer& Laptop problem</p>
        </div> */}
        <div>
          <img
            src="https://northmuscat.com/wp-content/uploads/2019/01/27_10_2017_17_11_55_c416863c08fb9ef16eb6cc187c05fd54_brpnud7wvg.jpg"
            alt="Fourth slide"
          />
          <p className="legend">Upgrade Computer Space</p>
        </div>
        {/* <div>
          <img
            src="https://www.beyourownit.com/wp-content/uploads/2020/06/computer-repair-safety.jpg"
            alt="Fourth slide"
          />
          <p className="legend">And we have sparepart for exchange</p>
        </div> */}
      </Carousel>
      <div className="container mt-5">
        <h1 style={{ fontFamily: "serif", backgroundColor: "goldenrod" }}>
          Service Info
        </h1>
        <div className="text-center">
          <img src="https://thumbs.dreamstime.com/b/miniature-technicians-tiny-toys-team-engineers-repairing-keyboard-computer-repair-concept-tech-support-f-motherboard-laptop-315677646.jpg" alt=""  style={{width: "800px",fontFamily:"serif", height:"auto", display:"block", margin:"0 auto"}}/>
          <p style={{fontFamily:"monospace"}}>
            Our expert field engineers are on hand to come to your premises and
            install your equipment - whether it′s a simple PC installation or
            complex network rollout over multiple sites. This comprehensive
            repaired service is available to all PSC customers as well as those
            that did not initially purchase from PSC. NETWORKING: Comple
            network(LAN/WAN/VPN) Networks (PC/Laptop/Server/Mac) Cisco
            (Router/Pix/Catalyst Swith) IT Consultancy & support Phone System /
            Camera Security Cabling Struture / Fiber Optic System Integrations
            Wireless / Lease Line Service Maintenance Complex Network
            (LAN/WAN/VPN)   PSC has extensive experience in designing and
            setting up tailored solutions in complex networking, especally the
            installation of LAN/WAN/VPN as intranets and extranets to all types
            of companies. Networks (Server/PC/Laptop)   We are able to desing
            and install networking solutions to suit you or your cmpanies'
            needs-however big or small the project is. IT Support And Solutions
              PSC's IT support facilities are unrivaled in Cambodia, we can
            service as much or as little of your network as you require.All our
            IT professionals are professional,helpful and above all highly
            trained. Our help desk is open from 7.30am to 5.30pm Mon-Sun. If you
            have any problems please do not hesitate to call them.   We help our
            clients achieve improved business performance by understanding their
            business issues,focusing on IT solutions that can transform
            challenges into opportu- nities, optimizing process workflows and
            implementing supporting business systems and managing these systems
            for peak performance. We strive to ensure the best possi- ble
            solution at the best possible price.
          </p>
        </div>
        <div>
          <img src="http://www.psccomputer.com.kh/image/services.png" alt="" style={{width:"900"}} />
          <p style={{fontFamily:"monospace"}}>
            SERVICES AND TECHNICAL SUPPORTS   Services and IT supports are
            always a head for PSC Computer Center Co., Ltd...   The relationship
            between PSC and our customers did not stop at just selling computers
            and accessories, we also provide after sales service which is second
            to none. From simple upgrades to full server builds, our
            configuration centre and highly qualified engineers are ready to
            ensure you have the right hardware specification to complete your
            needs. We can also help to solve any issues you may have, from
            general repairs to consultation on up-grades.   Our expert field
            engineers are on hand to come to your premises and install your
            equipment - whether it′s a simple PC installation or complex network
            rollout over multiple sites. This comprehensive repaired service is
            available to all PSC customers as well as those that did not
            initially purchase from PSC.   We help our clients achieve improved
            business performance by understanding their business issues,
            focusing on IT solutions that can transform challenges into
            opportunities, optimizing process workflows and implementing
            supporting business systems and managing these systems for peak
            performance. We strive to ensure the best possible solution at the
            best possible price.
          </p>
        </div>
      </div>
      <h1 className="text-center" style={{backgroundColor:"goldenrod", fontFamily:"serif"}}> Menber of team service</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <h3>Mrr.Cheu Rady</h3>
            <img src={Pic1} alt=""style={{width: "300px",}} />
            <p>General Service</p>
            <p>Software Hardware </p>
          </div>
          <div className="col-sm-4">
            <h3>Mrr.Doeun Bong</h3>
            <img src={Bong} alt=""style={{width: "200px",}} />
            <p>Software Service</p>
            <p>Control all software problem</p>
          </div>
          <div className="col-sm-4">
            <h3>Mrr.Yim Kaden</h3>
            <img src={Bden} alt=""style={{width: "200px",}} />
            <p>Hardware Service</p>
            <p>Control all Hardware problem</p>
          </div>
        </div>
      </div>
      <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
        <div className="row" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className="col-sm-4" style={{ flex: "0 0 auto" }}>
            <h3>Mrr.Meng hong</h3>
            <img src={Hong} alt="" style={{width: "200px",}} />
            <p>Technical </p>
            <p>Support All Users Problem</p>
          </div>
          <div className="col-sm-4" style={{ flex: "0 0 auto" }}>
            <h3>Mrr.Sour Hongly</h3>
            <img src={Li} alt="" style={{width: "200px",}}/>
            <p>Technical</p>
            <p>Support All Users Problem</p>
          </div>
        </div>
      </div>
      {/* <div>
        <h1 style={{backgroundColor:"goldenrod", fontFamily:"serif"}} >One Team One Goal</h1>
        <img src={Team} alt=""  style={{width: "800px",fontFamily:"serif", height:"auto", display:"block", margin:"0 auto"}}/>
        
      </div> */}
    </div>
  );
};

export default FourColumnLayout;
