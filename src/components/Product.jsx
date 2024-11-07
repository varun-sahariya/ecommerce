import React from 'react';
import Img1 from "/src/assets/women/women.png";
import Img2 from "/src/assets/women/women3.jpg";
import Img3 from "/src/assets/women/women2.jpg";
import Img4 from "/src/assets/women/women4.jpg";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    author: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 5.0,
    author: "Black",
    aosDelay: "100",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-SHirt",
    rating: 5.0,
    author: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img4,
    title: "Fashion T-Shirt",
    rating: 5.0,
    author: "Pink",
    aosDelay: "500",
  },
];

const Product = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-h-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>
            Products
          </h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore aliquid quam vitae placeat maiores.
          </p>
        </div>

        {/* body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
            {ProductsData.map((data) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className='space-y-3 transform transition duration-300 hover:scale-105 hover:shadow-lg'>
                <img
                  src={data.img}
                  alt={data.title}
                  className='h-[220px] w-[150px] object-cover rounded-md'
                />
                <div className='text-center'>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.author}</p>
                  <div className='flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center mt-6'>
            <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
