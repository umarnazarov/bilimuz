import React from "react";
import '../css/Navbar.css'

function Navbar({ toggle, handleToggle }) {
    return (
        <div id={toggle ? "mobile-nav" : ""} className="mobile-nav">
            <i onClick={handleToggle} className="fa fa-times"></i>
            <div className="mobile-nav-content">
                <a
                    onClick={handleToggle}
                    className="mobile-nav-link text-theme"
                    href="#about"
                >
                    Tariflar
                </a>
                <a
                    onClick={handleToggle}
                    className="mobile-nav-link text-theme"
                    href="#contact"
                >
                    Kurs Haqida
                </a>
                <a
                    onClick={handleToggle}
                    className="mobile-nav-link text-theme"
                    href="#contact"
                >
                    Blog
                </a>
                <a
                    onClick={handleToggle}
                    className="mobile-nav-link text-theme"
                    href="#contact"
                >
                    Bilim Ulashish
                </a>
                <a
                    onClick={handleToggle}
                    className="mobile-nav-link text-theme"
                    href="#contact"
                >
                    Royhatdan o'tish
                </a>
            </div>
        </div>
    );
}

export default Navbar
