import React from "react";
import "../home.css";
import Fade from "react-reveal/Fade";
import TestimonialCarousel from "./Testimonial";
import ImagePortfolio from "./Portfolio";
import Footer from "./Footer";
import img1 from "./images/rocket.png";
import img2 from "./images/arrow.png";
import img3 from "./images/grass.png";
import img4 from "./images/seo.png";
import img5 from "./images/screen.png";
import img6 from "./images/gdesign.png";
import img7 from "./images/b-rocket.png";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
        {/****** A JSX comment *******/}
        <Fade left>
          <div className="padding">
            <div className="hero">
              <h1 className="hero-content ">
                PROGRESSION TRANSITION TO THE DIGITAL FUTURE
              </h1>
              <img
                src={img1}
                alt="Rockett"
                width="700px"
                height="500px"
                className="hero-img"
              ></img>
            </div>
          </div>
        </Fade>
        {/****** A JSX comment *******/}
        <div className="padding">
          <Fade right>
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
              <img src={img2} className="arrow serv-image" alt="arrow"></img>
            </div>
          </Fade>
        </div>
        {/****** A JSX comment *******/}
        <div className="padding">
          <h1 className="gradient-word serv-gradient">SERVICES</h1>
          <h2 className="title provide">
            WHAT <span className="blue">WE PROVIDING</span>
          </h2>
        </div>
        {/****** A JSX comment *******/}
        <div className="padding">
          <Fade left>
            <div className="property">
              <img src={img3} className="serv-image" alt="SMM"></img>
              <div className="serv-detail smm-detail">
                <h2 className="title">
                  SOCIAL MEDIA <span className="blue">MARKETING</span>
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
            </div>
          </Fade>
        </div>
        {/****** A JSX comment *******/}
        <div className="padding">
          <Fade right>
            <div className="property-reverse seo-property">
              <div className="serv-detail seo-detail">
                <h2 className="title">
                  SEARCH ENGINE <span className="blue">OPTIMIZATION</span>
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
              <img src={img4} className="serv-image" alt="SEO"></img>
            </div>
          </Fade>
        </div>
        {/****** A JSX comment *******/}
        <div className="padding">
          <Fade left>
            <div className="property">
              <img src={img5} className="serv-image" alt="UI"></img>
              <div className="serv-detail ui-detail">
                <h2 className="title">
                  UI / UX DESIGN <span className="blue">DEVELOPMENT</span>
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
            </div>
          </Fade>
        </div>
        {/****** A JSX comment *******/}
        <div className="padding">
          <Fade right>
            <div className="property-reverse">
              <div className="serv-detail g-detail">
                <h2 className="title">
                  GRAPHIC <span className="blue">DESIGN</span>
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
              <img src={img6} className="serv-image" alt="graphic design"></img>
            </div>
          </Fade>
        </div>
        {/****** A JSX comment *******/}
        <div>
          <img src={img7} className="b-rocket" alt="Rocket"></img>
          <Fade left>
            <div className="serv-detail brand-detail padding">
              <h2 className="title">
                BRAND <span className="blue">PROMOTION</span>
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
          </Fade>
        </div>
        <div>
          <div className="padding">
            <h1 className="gradient-word test-gradient">TESTIMONIAL</h1>
            <h2 className="title provide">
              WHAT OUR <span className="blue">CLIENT SAYS</span>
            </h2>
          </div>
          <div>
            <Fade bottom>
              <TestimonialCarousel />
            </Fade>
            <Fade bottom>
              <ImagePortfolio />
            </Fade>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
