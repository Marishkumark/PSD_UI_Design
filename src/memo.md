@layer base {

- {
  @apply m-0 p-0 box-border;
  }

body {
@apply font-body;
}

.Hero-Container {
@apply flex space-x-24 px-52;
}

ul {
@apply flex space-x-16 mt-20 text-xl text-white;
}
.Background {
@apply bg-sky-500;
}

/**\*** Home **\*\***/

.Home {
@apply bg-gradient-to-b from-sky-500 to-white h-128;
}
.section {
@apply px-52;
}

.home-title {
@apply pt-24;
}
.home-head {
@apply text-5xl font-bold w-4/6 pl-7;
}
.Rocket {
@apply translate-x-3/4 -translate-y-32;
}
.bg-title {
@apply text-lm font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-violet-700 font-head w-5/6 opacity-20;
}
.who-head {
@apply text-3xl font-semibold pb-10;
}

.line {
@apply text-sky-500 font-bold underline underline-offset-4;
}
.who-para {
@apply font-medium;
}
button {
@apply bg-gradient-to-br from-sky-400 to-blue-700 text-white px-4 py-1 rounded-lg mt-6;
}
.who-content {
@apply w-3/4;
}
.who {
@apply flex space-x-2 -translate-y-44;
}
.arrow {
@apply -translate-y-16 translate-x-14;
}
.service {
@apply -mt-60;
}
.provide {
@apply -mt-10;
}
.service-provide {
@apply flex flex-col;
}
.content {
@apply w-1/2;
}
.serv-image {
@apply w-1/2;
}
.total-content {
@apply flex space-x-8;
}
.social-content {
@apply translate-y-24;
}
.seo-img {
@apply -translate-y-24;
}
.screen {
@apply -translate-y-24 -translate-x-10;
}
.g-img {
@apply -translate-y-24;
}
.b-rocket {
@apply -translate-y-96;
}
.brand {
@apply -mt-96 -translate-y-96;
}
}

import Testimonial from "./Testimonial";
import Data from "./Data";

export default function Home() {
const Testimonials = Data.map((item) => {
return <Testimonial item={item} />;
});

<div className="test-position">
          <div className="test padding">
            <h1 className="gradient-word test-gradient">TESTIMONIAL</h1>
            <h2 className="title provide">
              WHAT OUR <span className="blue">CLIENT SAYS</span>
            </h2>
          </div>
          <div className="testimonial">
            <div className="testimonial-bg">
              <div className="circle-blue">
                <img src="./images/profile.png" className="image-pro"></img>
              </div>
            </div>
            <div className="test-1">
              <h1 className="test-gradient">TESTIMONIAL</h1>
              <h2 className="title provide c-padd">
                WHAT OUR <span className="blue">CLIENT SAYS</span>
              </h2>
              <div className="test-center client-padding c-padd">
                <h1 className="client quote">CLIENT NAME</h1>
                <div className="quote-size">
                  <p className="r-quotation">"</p>
                  <p className="quotes">
                    Cognitive was conceptualised with a vision to provide
                    transparent and efficient digital marketing solutions1".
                  </p>
                  <p className="quotation">"</p>
                </div>
              </div>
            </div>
          </div>
          <div className="test-center test">
            <h1 className="client padding">CLIENT NAME</h1>
            <div className="quote-size padding">
              <p className="r-quotation">"</p>
              <p className="quotes">
                Cognitive was conceptualised with a vision to provide
                transparent and efficient digital marketing solutions.
              </p>
              <p className="quotation">"</p>
            </div>
          </div>
        </div>

.test {
@apply md:hidden relative;
}
.test-1 {
@apply hidden md:block relative lg:-translate-y-28;
}
.testimonial {
@apply flex md:pt-36 lg:pt-0;
}
.test-gradient {
@apply font-Oswald text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-violet-700 opacity-20 md:text-7xl lg:text-9xl xl:text-lm w-full font-black mt-8;
}
.test-center {
@apply text-center;
}
.client {
@apply text-left font-bold text-lg md:text-xl;
}
.c-padd {
@apply pl-16;
}
.test-position {
@apply md:-mt-96 -mt-24;
}
.quotation {
@apply text-right md:text-6xl text-4xl text-blue-900 font-quote;
}
.r-quotation {
@apply text-right md:text-6xl text-4xl text-blue-900 font-quote md:-mt-6 rotate-180;
}
.quote-size {
@apply lg:w-129;
}
.quotes {
@apply md:text-base lg:text-lg lg:w-128 text-center mx-auto w-72 lg:ml-10 text-sm;
}
