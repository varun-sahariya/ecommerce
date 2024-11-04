import React from "react";
import Logo from "/src/assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa"; // Import the FaCaretDown icon for the dropdown
import DarkMode from "./DarkMode";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#",
    },
];

const Dropdownlinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
];

const Navbar = () => {
   return (
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
         <div className="bg-primary/40 py-2">
            <div className="container flex justify-between items-center gap-4">
               <div>
                  <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                     <img src={Logo} alt="Logo" className="w-10"/>
                     Shoppy
                  </a>
               </div>

               {/* Search, Cart, and Dark Mode Section */}
               <div className="flex items-center gap-4 sm:gap-8">
                  {/* Search bar */}
                  <div className="relative group">
                     <input 
                        type="text"
                        placeholder="Search" 
                        className="w-[150px] sm:w-[200px] lg:w-[275px] transition-all duration-300 ease-in-out group-hover:w-[200px] sm:group-hover:w-[275px] lg:group-hover:w-[500px] rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary"
                     />
                     <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 transform -translate-y-1/2 right-2"/>
                  </div>

                  {/* Order button */}
                  <button 
                     onClick={() => alert("Ordering not available")}
                     className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 ease-in-out text-white py-1 px-4 rounded-full flex items-center gap-2 group"
                     aria-label="Shopping cart"
                  >
                     <span className="group-hover:block hidden transition-all duration-200">Order</span>
                     <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                  </button>

                  {/* Dark Mode Button */}
                  <DarkMode />
               </div>
            </div>
         </div>
         
         {/* Lower Navbar (Menu Section) */}
         <div className="bg-white dark:bg-gray-900 py-2">
            <div className="container flex justify-center">
               <ul className="flex items-center gap-6 sm:gap-4">
                  {Menu.map((data) => (
                     <li key={data.id}>
                        <a href={data.link} className="px-2 sm:px-4 py-1 hover:text-primary duration-200">
                           {data.name}
                        </a>
                     </li>
                  ))}
                  <li className="group relative cursor-pointer">
                    <a href="#" className="flex items-center gap-[2px] py-2">
                        Trending 
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </span>
                    </a>
                    {/* Dropdown menu */}
                    <div className="hidden absolute z-[9999] group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md dark:bg-gray-800 dark:text-white">
                       <ul>
                          {Dropdownlinks.map((data) => (
                            <li key={data.id}>
                                <a 
                                  href={data.link}
                                  className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                >
                                    {data.name}
                                </a>
                            </li>
                          ))}
                       </ul>
                    </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
