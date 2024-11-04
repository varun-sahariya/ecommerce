import React from 'react';
import Banner from '/src/assets/website/orange-pattern.jpg';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "100%", // Adjusted to fit the full container
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
          <div>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>
                Get Notified About New Products 
            </h1>
            <input 
                data-aos="fade-up"
                type="text"
                placeholder='Enter your email' 
                className='w-full p-3 mt-4' // Added margin-top for spacing
            />
          </div>
        </div>
    </div>
  );
}

export default Subscript;
