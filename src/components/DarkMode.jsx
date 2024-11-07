import React, { useState, useEffect } from "react";
import LightButton from "/src/assets/website/light-mode-button.png"; 
import DarkButton from "/src/assets/website/dark-mode-button.png"; 

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div className="relative">
            {theme === "light" ? (
                <img 
                    src={LightButton} 
                    alt="Switch to dark mode" 
                    aria-label="Switch to dark mode" 
                    onClick={() => setTheme("dark")} 
                    role="button" 
                    className="w-10 h-8 cursor-pointer transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg" // Increased width, decreased height
                />
            ) : (
                <img 
                    src={DarkButton} 
                    alt="Switch to light mode" 
                    aria-label="Switch to light mode" 
                    onClick={() => setTheme("light")} 
                    role="button"
                    className="w-10 h-8 cursor-pointer transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg" // Increased width, decreased height
                />
            )}
        </div>
    );
};

export default DarkMode;

