import React, { useState } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Kate",
      role: "Photographer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
      content:
        "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg",
      content:
        "MIn ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta du",
    },
    {
      id: 3,
      name: "Anna Deynah",
      role: "UX Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
      content:
        "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta du",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex(
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
    );
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div
          id="carouselExampleCaptions"
          className="relative"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative float-left ${
                  index === activeIndex ? "" : "-mr-[100%] hidden"
                } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
                data-te-carousel-active={index === activeIndex}
                data-te-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                  src={testimonial.image}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-xl font-bold text-black">
                      {testimonial.name}
                    </h5>
                    <p className="mb-4 font-medium text-black text-lg">
                      {testimonial.role}
                    </p>
                    <p className="mb-6 text-black md:text-lg text-sm">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 transform font-semibold md:text-4xl bg-white rounded-full p-4 shadow-md hover:shadow-lg focus:outline-none"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 transform font-semibold md:text-4xl bg-white rounded-full p-4 shadow-md hover:shadow-lg focus:outline-none"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialCarousel;
