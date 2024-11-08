import React from 'react';
import Slider from "react-slick";

const testimonialData = [
  {    
    id: 1,
    name: "John Doe",
    text: "Great service and quality products!",
    image: "https://picsum.photos/id/1011/200/300"
  },
  {    
    id: 2,
    name: "Jane Smith",
    text: "Fast delivery and excellent customer support.",
    image: "https://picsum.photos/id/1025/200/300"
  },
  {    
    id: 3,
    name: "Alice Johnson",
    text: "Highly recommend this shop for all fashion needs!",
    image: "https://picsum.photos/id/1005/200/300"
  },
  {    
    id: 4,
    name: "Mike Davis",
    text: "Affordable and trendy items, love it!",
    image: "https://picsum.photos/id/1047/200/300"
  },
  {    
    id: 5,
    name: "Emma Watson",
    text: "A seamless shopping experience from start to finish.",
    image: "https://picsum.photos/id/1052/200/300"
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p data-aos="fade-up" className="text-sm text-primary">
          What our customers have to say
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Testimonials
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore aliquid quam vitae placeat maiores.
        </p>
      </div>

      <div data-aos="zoom-in">
        <Slider {...settings}>
          {testimonialData.map((data) => (
            <div key={data.id} className="mb-6 px-2">
              <div className="flex flex-col items-center gap-4 shadow-lg py-6 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative max-w-xs mx-auto">
                <div className="mb-4">
                  <img src={data.image} alt={`${data.name}'s testimonial`} className="rounded-full w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                <div className="text-center space-y-3">
                  <p className="text-sm text-gray-600 sm:text-gray-500">
                    {data.text}
                  </p>
                  <h1 className="text-lg sm:text-xl font-bold text-black/80 dark:text-light">
                    {data.name}
                  </h1>
                </div>
                <p className="text-black/10 text-8xl font-serif absolute top-0 right-2 opacity-20">
                  ''
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
