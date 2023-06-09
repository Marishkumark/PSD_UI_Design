import React from "react";
import "../home.css";
import TestimonialCarousel from "./Testimonial";
import ImagePortfolio from "./Portfolio";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
        <div className="padding">
          <div className="hero">
            <h1 className="hero-content ">
              PROGRESSION TRANSITION TO THE DIGITAL FUTURE
            </h1>
            <img
              src="./images/rocket.png"
              width="700px"
              height="500px"
              className="hero-img"
            ></img>
          </div>
          <div>
            <div>
              <h1 className="gradient-word ">WHY CHOOSE US</h1>
            </div>
            <div className="property">
              <div className="serv-detail arrow-detail">
                <h2 className="title">
                  WHO <span className="blue">WE ARE</span>
                </h2>
                <p className="detail">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient mont, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla conseq at massa quis enim. Donec
                  pede justo, fringilla vel, aliq
                </p>
                <button className="read-more">Read More</button>
              </div>
              <img src="./images/arrow.png" className="arrow serv-image"></img>
            </div>
          </div>
          <div>
            <h1 className="gradient-word serv-gradient">SERVICES</h1>
            <h2 className="title provide">
              WHAT <span className="blue">WE PROVIDING</span>
            </h2>
          </div>
          <div className="property">
            <img src="./images/grass.png" className="serv-image"></img>
            <div className="serv-detail smm-detail">
              <h2 className="title">
                SOCIAL MEDIA <span className="blue">MARKETING</span>
              </h2>
              <p className="detail">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient mont, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla conseq at massa quis enim. Donec pede justo,
                fringilla vel, aliq
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
          <div className="property-reverse seo-property">
            <div className="serv-detail seo-detail">
              <h2 className="title">
                SEARCH ENGINE <span className="blue">OPTIMIZATION</span>
              </h2>
              <p className="detail">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient mont, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla conseq at massa quis enim. Donec pede justo,
                fringilla vel, aliq
              </p>
              <button className="read-more">Read More</button>
            </div>
            <img src="./images/seo.png" className="serv-image"></img>
          </div>
          <div className="property">
            <img src="./images/screen.png" className="serv-image"></img>
            <div className="serv-detail ui-detail">
              <h2 className="title">
                UI / UX DESIGN <span className="blue">DEVELOPMENT</span>
              </h2>
              <p className="detail">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient mont, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla conseq at massa quis enim. Donec pede justo,
                fringilla vel, aliq
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
          <div className="property-reverse">
            <div className="serv-detail g-detail">
              <h2 className="title">
                GRAPHIC <span className="blue">DESIGN</span>
              </h2>
              <p className="detail">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient mont, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla conseq at massa quis enim. Donec pede justo,
                fringilla vel, aliq
              </p>
              <button className="read-more">Read More</button>
            </div>
            <img src="./images/gdesign.png" className="serv-image"></img>
          </div>
        </div>
        <div>
          <img src="./images/b-rocket.png" className="b-rocket"></img>
          <div className="serv-detail brand-detail padding">
            <h2 className="title">
              BRAND <span className="blue">PROMOTION</span>
            </h2>
            <p className="detail">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient mont, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla conseq at massa quis enim. Donec pede justo, fringilla
              vel, aliq
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>
        <div>
          <div className="padding">
            <h1 className="gradient-word test-gradient">TESTIMONIAL</h1>
            <h2 className="title provide">
              WHAT OUR <span className="blue">CLIENT SAYS</span>
            </h2>
          </div>

          <div>
            <TestimonialCarousel />
            <ImagePortfolio />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
