import React from 'react';
import Banner from '/src/assets/website/orange-pattern.jpg';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%', // Adjusted to fit the full container
  width: '100%',
};

const Subscript = () => {
  return (
    <div
      data-aos='zoom-in'
      className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'
      style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='flex flex-col items-center sm:items-start'>
          <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 mt-4 p-3 rounded-md placeholder-gray-500"
          />
          <button
            className="bg-primary text-white py-2 px-6 rounded-full mt-4 hover:scale-105 transition duration-300"
            data-aos="fade-up"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscript;
