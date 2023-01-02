import React from "react";
import front from "../images/bg-card-front.png";
import back from "../images/bg-card-back.png";
import "./cardimages.css";
import logo from "../images/card-logo.svg"

function CardImages({catchName, catchNumber, catchCvv, catchMonth, catchYear}) {
    return (
        <div className="cardContainer">
            <div>
                <img src={front} alt="frontCard" className="frontSide" />
                <div>
                    <img src={logo} alt="logo" className="logo" />
                    <h3 className="cardNumber">{catchNumber}</h3>
                    <div>
                        <p className="cardDetails">{catchName}</p>
                        <p className="cardExpiry">{catchMonth} / {catchYear}</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={back} alt="backCard" className="backSide" />
                <div>
                    <p className="cvv">{catchCvv}</p>
                </div>
            </div>
        </div>
    )
}

export default CardImages;