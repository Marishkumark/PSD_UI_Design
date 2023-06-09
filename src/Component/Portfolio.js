import React, { useState } from "react";
import "../home.css";

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
              <img src="./images/image1.png" className="img1"></img>
            </div>
            <div className="button-flex">
              <div className="port-smg">
                <div className="align">
                  <img
                    src="./images/sm.jpg"
                    className="img-shad"
                    width="100px"
                  ></img>
                  <p className="dblue">Social Media Post</p>
                </div>
                <div className="align">
                  <img
                    src="./images/logo.jpeg"
                    className="img-shad"
                    width="100px"
                  ></img>
                  <p className="dblue">Logos</p>
                </div>
                <div className="align">
                  <img
                    src="./images/banner.jpg"
                    className="img-shad"
                    width="100px"
                  ></img>
                  <p className="dblue">Banners</p>
                </div>
                <div className="align">
                  <img
                    src="./images/banner.jpg"
                    className="img-shad"
                    width="100px"
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
