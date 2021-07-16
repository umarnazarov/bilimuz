import React from 'react'
import "../css/Footer.css"
import playD from "../images/playD.png"
import AppStore from "../images/AppStore.png"

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-links">
                    <h2><a>Platforma</a></h2>
                    <a href="#">Biz haqimizda</a>
                    <a href="#">Tariflar</a>
                    <a href="#">Kurslar haqida</a>
                    <a href="#">Blog</a>
                </div>
                <div className="footer-links">
                    <h2><a>Ma’lumotlar</a></h2>
                    <a href="#">Fikrlar</a>
                    <a href="#">FAQ</a>
                    <a href="#">Конфиденциальность</a>
                </div>
                <div className="footer-links">
                    <h2><a>Ijtimoiy sahifamiz</a></h2>
                    <a href="#"><i class="fab fa-instagram f-logo"></i> Instagram</a>
                    <a href="#"><i class="fab fa-telegram f-logo"></i> Telegram</a>
                    <a href="#"><i class="fab fa-facebook f-logo"></i> Facebook</a>
                    <a href="#"><i class="fab fa-twitter f-logo"></i> Twitter</a>
                </div>
                <div className="footer-links">
                    <h2><a>Dasturni yuklab olish</a></h2>
                    <img className="f-get-app" src={playD} />
                    <img className="f-get-app" src={playD} />
                </div>
            </div>
            <div className="footer-logo">
                <h3>© 2021 Birzoom – Endi ta’lim birzumda!</h3>
            </div>
        </div>
    )
}

export default Footer
