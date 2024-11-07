import React from "react";
import Image1 from "/src/assets/hero/women (1).png";
import Image2 from "/src/assets/hero/shopping.png";
import Image3 from "/src/assets/hero/sale.png";
import Slider from "react-slick";

// Image data
const ImageLists = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi voluptate, vero quia quis ab exercitationem, perferendis excepturi saepe cum sit. Exercitationem sequi beatae, molestiae ex ab nesciunt alias suscipit!",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi voluptate, vero quia quis ab exercitationem, perferendis excepturi saepe cum sit. Exercitationem sequi beatae, molestiae ex ab nesciunt alias suscipit!",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 50% off on kid's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi voluptate, vero quia quis ab exercitationem, perferendis excepturi saepe cum sit. Exercitationem sequi beatae, molestiae ex ab nesciunt alias suscipit!",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500, // Slower speed for smoother transitions
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // More time between slides
    cssEase: "ease-in-out", // Smooth easing function
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-r-3xl rotate-45 -z-9"></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageLists.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Text and button section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="1000" // Increased duration for smoother animation
                    data-aos-easing="ease-in-out-sine" // Smoother easing function
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000" // Increased duration for a smoother effect
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out-sine" // Smoother easing
                    className="text-base sm:text-lg"
                  >
                    {item.description}
                  </p>
                  <div>
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      aria-label="Order Now"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1000" // Smoother and slower zoom effect
                    data-aos-easing="ease-in-out-sine" // Adjusted easing for smoother transition
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={item.img}
                      alt={`Promotional image for ${item.title}`}
                      className="w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
