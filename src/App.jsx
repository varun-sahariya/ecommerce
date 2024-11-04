import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import DarkMode from "./components/DarkMode";
import Product from "./components/product";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./components/TopProduct";
import Banner from "./components/Banner";
import Subscript from "./components/subscript";
import Testmonial from "./components/testmonial";
import Footer from "./components/Footer";
const App = () => {
    React.useEffect(() => {
        AOS.init({
            offset: 100,  
            duration: 1000,  
            easing: 'ease-in-out-sine',  
            delay: 100,
        });
        AOS.refresh();
    }, []);
    return <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar></Navbar>
        <Hero></Hero>
        <Product></Product>
        <TopProduct></TopProduct>
        <Banner></Banner>
        <Subscript></Subscript>
        <Product></Product>
      <Testmonial></Testmonial>
      <Footer></Footer>
        
    </div>
};

export default App;