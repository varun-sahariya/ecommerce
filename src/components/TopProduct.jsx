import React from 'react';
import Img1 from "/src/assets/shirt/shirt.png";
import Img2 from "/src/assets/shirt/shirt2.png";
import Img3 from "/src/assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductData = [
    {
       id: 1,
       img: Img1,
       title: "Casual Wear",
       description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aut odio dolorem impedit consequatur ipsam culpa temporibus nesciunt cupiditate ut libero nobis beatae, neque deserunt omnis. Reiciendis exercitationem saepe quaerat."
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aut odio dolorem impedit consequatur ipsam culpa temporibus nesciunt cupiditate ut libero nobis beatae, neque deserunt omnis. Reiciendis exercitationem saepe quaerat."
     },
     {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aut odio dolorem impedit consequatur ipsam culpa temporibus nesciunt cupiditate ut libero nobis beatae, neque deserunt omnis. Reiciendis exercitationem saepe quaerat."
     },
];

const TopProduct = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-left mb-8'>
            <p data-aos="fade-up" className='text-sm text-primary'>
              Top Rated Products for You  
            </p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>
               Best Products
            </h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam obcaecati, laboriosam debitis repellat facilis dolor?
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 place-items-center mt-12'>
            {ProductData.map((data) => (
                <div 
                    key={data.id}
                    data-aos="zoom-in"
                    className="rounded-2xl bg-white dark:bg-gray-800 hover:text-white relative shadow-lg duration-300 group max-w-[280px] lg:max-w-[300px]"
                >
                    <div className='h-[150px] flex justify-center items-center'> {/* Center image container */}
                        <img 
                            src={data.img} 
                            alt={data.title} 
                            className='max-w-[120px] md:max-w-[140px] block transform -translate-y-8 group-hover:scale-105 duration-300 drop-shadow-md' 
                        />
                    </div>
                    <div className='flex items-center justify-center gap-1 mt-2'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                    </div>
                    <div className='text-center p-4 pt-6'>
                        <h1 className='text-lg md:text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                            {data.description}
                        </p>
                        <button 
                            className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TopProduct;
