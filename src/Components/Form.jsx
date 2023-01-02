import React from "react";
import "./form.css";

function Form({gettingName, gettingNumber, gettingCvv, gettingMonth, gettingYear, handle}) {

    return(
        <div className="formContainer">
            <form className="form" onSubmit={handle}>
                    <label className="labels">CARDHOLDER NAME</label>
                    <input className="text" type="text" placeholder="e.g. Jane Appleseed" onChange={gettingName} required />
                    <p id="errorMsg"></p>
                    <label className="labels">CARD NUMBER</label>
                    <input className="text" type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={gettingNumber} required minLength="0" maxLength="16" />
                <div className="expiryLabels">
                    <label className="labelsExpiry">EXP. DATE (MM/YY)</label>
                    <label className="labelsCvv">CVC</label>
                </div>
                <div className="expiry">
                    <input className="expiryText" type="text" placeholder="MM" onChange={gettingMonth} required minLength="0" maxLength="2" />
                    <input className="expiryText" type="text" placeholder="YY" onChange={gettingYear} required minLength="0" maxLength="2" />
                    <input className="cvvText" type="text" placeholder="e.g. 123" onChange={gettingCvv} required minLength="0" maxLength="3" />
                </div>
                <button className="button">Confirm</button>
            </form>
        </div>
    )
}

export default Form;