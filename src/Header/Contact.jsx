import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ fontFamily: "serif" }}>
        Contact Us
      </h2>
      <div className="row">
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-light" style={{color:"black"}}>
            <h4>Contact Information</h4>
            <p className="mt-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Street Name, City,
              State, 12345
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1 (555) 123-4567
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> contact@example.com
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 style={{color:"black"}}>Follow Us</h4>
            <div className="mt-3 d-flex justify-content-between">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, marginRight: "10px" }}
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info"
                style={{ flex: 1, marginRight: "10px" }}
              >
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
                style={{ flex: 1, marginRight: "10px" }}
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3 style={{ fontFamily: "serif" }}>
          Check our branches near your location
        </h3>
        <img
          src="https://i.pinimg.com/originals/1d/af/e5/1dafe56f7b73d2b673feb5036e1eca8c.png"
          alt="All Locations"
          className="img-fluid mt-4 mb-4"
          style={{ maxHeight: "400px" }}
        />
      </div>
      <div className="container">
        <h4
          className="text-center mb-4"
          style={{ fontFamily: "serif", backgroundColor: "goldenrod" }}
        >
          Welcome to our branch locations
        </h4>
        <div className="row">
          {[
            {
              name: "Branch Sen Sok",
              img: "https://i.pinimg.com/236x/9f/09/58/9f09586c6ce55c9218680203c3fbfeaf.jpg",
              address: "1234 Street Name, City, State, 12345",
            },
            {
              name: "Branch Toul Kork",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVSTDZgfkrOndzUdqrKcGUdxpB5l2OOwLJg&s",
              address: "5678 Avenue, City, State, 67890",
            },
            {
              name: "Branch Chamkarmon",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsc0UQXJoIcpHEpqkS0ptZtx8qnbvx5VSAg&s",
              address: "91011 Boulevard, City, State, 11213",
            },
            {
              name: "Branch Mean Chey",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqN5P0pSjAJgi22HKqjGRXi1tJ2Yb0kJdVQ&s",
              address: "141516 Street, City, State, 14151",
            },
            {
              name: "Branch Daun Penh",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7zyXjQSkiPEh6annNXIzdmw9MiR3Jwl0nA&s",
              address: "171819 Street, City, State, 17181",
            },
            {
              name: "Branch Chroy Changva",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dmXUgDYSzE73rH_yK0_Tw6UCDwM15dR6JQ&s",
              address: "202122 Street, City, State, 20212",
            },
          ].map((branch, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={branch.img}
                  className="card-img-top"
                  alt={branch.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{branch.name}</h5>
                  <p className="card-text">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {branch.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
