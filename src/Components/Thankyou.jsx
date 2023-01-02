import React from "react";
import logo from "../images/icon-complete.svg";
import "./thankyou.css";
import Form from "./Form";

function Thankyou() {
    return(
        <div className="container">
            <div>
                <img src={logo} alt="logo" className="logoImage" />
            </div>
            <div>
                <h2 className="thanks">THANK YOU!</h2>
                <p className="added">We've added your card details</p>
            </div>
            <a href={Form}>
                <button className="continue">Continue</button>
            </a>
        </div>
    )
}

export default Thankyou;