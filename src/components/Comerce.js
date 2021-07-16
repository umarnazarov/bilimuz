import React from 'react'
import android from "../images/android.svg"
import "../css/Comerce.css"
import playD from "../images/playD.png"
function Comerce() {
    return (
        <div className='comerce-container'>
            <img src={android} />
            <div className="comerce-content">
                <h1>Endilikda bilan darslar oson va qulay</h1>
                <p>Birzoom ilovasidan foydalanib o’z bonuslaringizga ega bo’ling. Bonuslar kunlik qo’shilib boriladi.</p>
                <img className="get-app" src={playD} />
                <img className="get-app" src={playD} />
            </div>
        </div>
    )
}

export default Comerce
