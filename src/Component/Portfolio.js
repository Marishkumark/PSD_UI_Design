import React, { useState } from "react";
import "../home.css";
import img1 from "./images/image1.png";
import img2 from "./images/sm.jpg";
import img3 from "./images/logo.jpeg";
import img4 from "./images/banner.jpg";

const ImagePortfolio = () => {
  return (
    <div>
      <div className="padding">
        <h1 className="gradient-word">PORTFOLIO</h1>
        <h2 className="title provide">
          OUR <span className="blue">PORTFOLIO</span>
        </h2>
        <a href="https://www.behance.net/Bangaloremediawork" target="_blank">
          <div className="port-flex">
            <div className="port-img">
              <img src={img1} className="img1" alt="portfolio"></img>
            </div>
            <div className="button-flex">
              <div className="port-smg">
                <div className="align">
                  <img
                    src={img2}
                    className="img-shad"
                    width="100px"
                    alt="Rocket"
                  ></img>
                  <p className="dblue">Social Media Post</p>
                </div>
                <div className="align">
                  <img
                    src={img3}
                    className="img-shad"
                    width="100px"
                    alt="logo"
                  ></img>
                  <p className="dblue">Logos</p>
                </div>
                <div className="align">
                  <img
                    src={img4}
                    className="img-shad"
                    width="100px"
                    alt="banner"
                  ></img>
                  <p className="dblue">Banners</p>
                </div>
                <div className="align">
                  <img
                    src={img4}
                    className="img-shad"
                    width="100px"
                    alt="Rocket"
                  ></img>
                  <p className="dblue">Websites</p>
                </div>
              </div>
              <div>
                <button className="read-more port-button">Read More</button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ImagePortfolio;
