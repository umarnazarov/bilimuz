import React, { useState } from 'react'
import { stuffs } from '../stuffData'
import "../css/Stuff.css"


function Stuffs() {
    const [currentStuff, setCurrentStuff] = useState(stuffs[0])
    const { id, img, name, info, age, city, opinion } = currentStuff
    const handleStuff = (id) => {
        const stuff = stuffs.find(s => s.id === id)
        setCurrentStuff(stuff)
    }
    const handleMoveRight = (u) => {
        if (u.id === currentStuff.id) {
            setCurrentStuff(stuffs[2])
        } else if (stuffs[0].id === currentStuff.id) {
            setCurrentStuff(stuffs[1])
        } else if (stuffs[2].id === currentStuff.id) {
            setCurrentStuff(stuffs[0])
        }
    }
    const handleMoveLeft = (u) => {
        if (u.id === currentStuff.id) {
            setCurrentStuff(stuffs[2])
        } else if (stuffs[1].id === currentStuff.id) {
            setCurrentStuff(stuffs[0])
        } else if (stuffs[2].id === currentStuff.id) {
            setCurrentStuff(stuffs[1])
        }
    }
    return (
        <div className="stuff-container">
            <h1 id="stuff-main-text">Jamoa Expertlari</h1>
            <div className="stuff-content">
                <div className="stuff-info">
                    <i onClick={() => handleMoveLeft(stuffs[0])} class="fas fa-angle-left"></i>
                    <img src={img} id="stuff-img" />
                    <i onClick={() => handleMoveRight(stuffs[1])} class="fas fa-angle-right"></i>
                    <h2>{name}</h2>
                    <h4>Yoshi: {age}</h4>
                    <h4>Kelib chiqishi: {city}</h4>
                    <p><span>O'zi haqida ma'lumot: </span>{info}</p>
                    <p><span>Ijobiy fikrlar: </span>{opinion}</p>
                </div>
                <div className="stuff-images">
                    <img id='sh1' className={stuffs[0].id === id && "active"} onClick={() => handleStuff(stuffs[0].id)} src={stuffs[0].img} />
                    <img id='sh2' className={stuffs[1].id === id && "active"} onClick={() => handleStuff(stuffs[1].id)} src={stuffs[1].img} />
                    <img id='sh3' className={stuffs[2].id === id && "active"} onClick={() => handleStuff(stuffs[2].id)} src={stuffs[2].img} />
                    <div id='sh4'></div>
                    <div id='sh5'></div>
                    <div id='sh6'></div>
                    <div id='sh7'></div>
                    <div id='sh8'></div>
                    <div id='sh9'></div>
                    <div id='sh10'></div>
                    <div id='sh11'></div>
                    <div id='sh12'></div>
                    <div id='sh13'></div>
                    <div id='sh14'></div>
                    <div id='sh15'></div>
                    <div id='sh16'></div>
                </div>
            </div>
        </div>
    )
}

export default Stuffs
