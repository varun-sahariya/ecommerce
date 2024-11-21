import React from 'react';
import footerLogo from "/src/assets/logo.png";
import Banner from '/src/assets/website/footer-pattern.jpg';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div style={BannerImg} className='text-white '>
            <div className='container max-w-full'>
                <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                    <div className='flex flex-col items-start py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3'>
                            <img src={footerLogo} alt="Footer Logo" className="w-full max-w-[120px]" />
                            Shopsy
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi amet molestias odit blanditiis ad dolore ea vel nemo ratione.
                        </p>
                    </div>

                    <div className='flex flex-col items-end py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold mb-3 text-right'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col gap-3 text-right'>
                            {FooterLinks.map((link) => (
                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col items-end py-8 px-4'>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaInstagram className='text-3xl' />
                            <FaFacebook className='text-3xl' />
                            <FaLinkedin className='text-3xl' />
                        </div>
                        <div className='mt-6 flex flex-col items-end'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <FaMobileAlt />
                                <p>1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
