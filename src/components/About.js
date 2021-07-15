import React from 'react'
import "../css/About.css"
function About() {
    return (
        <div className="about-conteiner">
            <h1>Platforma haqida</h1>
            <div className="about-cards">
                <div className="about-card">
                    <i className="fas fa-tachometer-alt card-font"></i>
                    <h2 className="about-card-title">Tezkor</h2>
                    <p className="about-card-text">Atigi 6 oy o'quv kursimizda hohlagan tilni o'zlashtiring</p>
                </div>
                <div className="about-card">
                    <i className="fas fa-shield-alt card-font"></i>
                    <h2 className="about-card-title">Ishonchli</h2>
                    <p className="about-card-text">Agarda kurs sizni qoniqtirmasa birinchi oyda pulingizni 100% qaytaramiz</p>
                </div>
                <div className="about-card">
                    <i className="fas fa-hand-holding-usd card-font"></i>
                    <h2 className="about-card-title">Arzon</h2>
                    <p className="about-card-text">Bizning platforma juda hamyombop va samarali</p>
                </div>
            </div>
        </div>
    )
}

export default About
