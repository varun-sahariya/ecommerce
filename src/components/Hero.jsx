import React from "react";
import Image1 from "/src/assets/hero/women (1).png";
import Image2 from "/src/assets/hero/shopping.png";
import Image3 from "/src/assets/hero/sale.png";
import Slider from "react-slick";

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
    speed: 1500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[400px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] bg-primary/30 absolute -top-1/2 right-0 rounded-r-3xl rotate-45 -z-9"></div>

      <div className="container pb-6 sm:pb-0 px-4 sm:px-0">
        <Slider {...settings}>
          {ImageLists.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Text and button section */}
                <div className="flex flex-col justify-center gap-4 pt-6 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-sine"
                    data-aos-once="true"
                    className="text-3xl sm:text-5xl font-bold leading-tight"
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out-sine"
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
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-sine"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={item.img}
                      alt={`Promotional image for ${item.title}`}
                      className="w-[200px] sm:w-[350px] object-contain"
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
