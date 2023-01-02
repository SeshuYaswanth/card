import React, { useState } from "react";
import "./app.css"
import AllImages from "./Components/AllImages";
import Form from "./Components/Form";
import Thankyou from "./Components/Thankyou";

function App() {
    const [name, setName] = useState("");
    const [catchName, setCatchName] = useState("JANE APPLESEED");
    
    const [number, setNumber] = useState("");
    const [catchNumber, setCatchNumber] = useState("0000 0000 0000 0000");

    const [cvv, setCvv] = useState("");
    const [catchCvv, setCatchCvv] = useState("000");

    const [month, setMonth] = useState("");
    const [catchMonth, setCatchMonth] = useState("00");

    const [year, setYear] = useState("");
    const [catchYear, setCatchYear] = useState("00");

    var login = true;

    function getName(event) {
        setName(event.target.value);
    }

    function getNumber(event) {
        setNumber(event.target.value);
    }

    function getCvv(event) {
        setCvv(event.target.value);
    }
    
    function getMonth(event) {
        setMonth(event.target.value);
    }

    function getYear(event) {
        setYear(event.target.value);
    }

    function handleEvent(event) {
        setCatchName(name.toUpperCase());
        setCatchNumber(number);
        setCatchCvv(cvv);
        setCatchMonth(month);
        setCatchYear(year);
        event.preventDefault();
        login = false;
    }

    return(
        <div className="main-container">
            <AllImages 
            names={catchName} 
            numbers={catchNumber} 
            cvvs={catchCvv} 
            months={catchMonth}
            years={catchYear}
            />
            {
            login ?
            <Form
            gettingName={getName}
            gettingNumber={getNumber} 
            gettingCvv={getCvv} 
            gettingMonth={getMonth}
            gettingYear={getYear}
            handle={handleEvent} 
            />
            :<Thankyou />
            }
        </div>
    )
}

export default App;
