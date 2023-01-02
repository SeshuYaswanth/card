import React from "react";
import main from "../images/bg-main-desktop.png";
import "./allimages.css";
import CardImages from "./CardImages";

function AllImages({names, numbers, cvvs, months, years}) {
    return(
        <div>
            <div className="images">
                <img src={main} alt="mainBackground" className="main" />
                <CardImages catchName={names} catchNumber={numbers} catchCvv={cvvs} catchMonth={months} catchYear={years} />
            </div>
        </div>
    )
}

export default AllImages;