import React, { useState } from 'react'
import "../css/Header.css"
import headimg from '../images/headerimg.svg'
import Navbar from "./Navbar"

function Header() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <header className='header-container'>
            <nav className="navbar">
                <a href="#" id="logo">BIRZOOM</a>
                <ul className="navbar-links">
                    <li><a href="#">Tariflar</a></li>
                    <li><a href="#">Kurs Haqida</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Bilim Ulashish</a></li>
                    {/* <i onClick={handleToggle} className="far fa-times-circle"></i> */}
                </ul>
                <div>
                    <button id="login">Royhatdan o'tish</button>
                </div>
                <i onClick={handleToggle} className="fas fa-bars"></i>
            </nav>
            <Navbar toggle={toggle} handleToggle={handleToggle} />
            <div onClick={() => setToggle(false)} className="header-content">
                <div id="c1"></div>
                <div id="c2"></div>
                <div id="c3"></div>
                <div className="header-text">
                    <span id="tashriflar">134 ming tashriflar</span>
                    <h1 className="header-main-text">Endi til <span className="d-color">o'rganish</span> <br /> Biz bilan yanada <span className="d-color">oson!</span></h1>
                    <p className="header-p-text">Til o'rganishning tezkor, qiziqarli va samarali usuli</p>
                    <button>Darsga yozilish</button>
                    <div className="mini-info">
                        <div className="num-info-card">
                            <h1 className="num-info">500</h1>
                            <p className="num-text">Spikerlar</p>
                        </div>
                        <div className="num-info-card">
                            <h1 className="num-info">10K+</h1>
                            <p className="num-text">O'quvchilar</p>
                        </div>
                        <div className="num-info-card">
                            <h1 className="num-info">23K+</h1>
                            <p className="num-text">Darsliklar</p>
                        </div>
                    </div>
                </div>
                <img id="headerimg" src={headimg} />
            </div>
        </header>
    )
}

export default Header
