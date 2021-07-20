import React, { useEffect } from 'react'
import "../css/About.css"
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function About() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        // let tl = gsap.timeline()
        gsap.from(".about-card", {
            scrollTrigger: {
                trigger: ".about-cards",
                // markers: true,
                start: "-150px center",
                end: "top"
            },
            y: 20, opacity: 0, duration: .5, stagger: { each: 0.1, from: "center" }
        })
        gsap.from(".anim-circle", {
            scrollTrigger: {
                trigger: ".about-cards",
                // markers: true,
                start: "-100px center",
                end: "+=300",
                scrub: true

            },
            scale: .5, opacity: 0, duration: 20, stagger: { each: 5, from: "start" }
        })

    })
    return (
        <div className="about-conteiner">
            <div className="anim-circle" id="c4"></div>
            <div className="anim-circle" id="c5"></div>
            <div className="anim-circle" id="c6"></div>
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
