import React from 'react'
import "../css/Infos.css"

function Infos({ props }) {
    const { img, title, text, buttonText, textAlign, mainTitle, flexDirection } = props
    return (
        <div className="info-container">
            <h1 id="info-m-title">{mainTitle}</h1>
            <div className="info-content" style={{ flexDirection }}>
                <img className="info-image" src={img} />
                <div id={textAlign === "left" ? "left" : "right"} className="info-text-content">
                    <h1 className="info-title">{title}</h1>
                    <p className="info-text">{text}</p>
                    <button className="info-button">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Infos
