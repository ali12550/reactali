import React from "react";
import "./index.css"
import { useState } from "react";

const EventBtn = () => {
    const purple = "#8e44ad"
    const [cColor, setBg] = useState(purple);
    const [evntName, setName] = useState("click Me");

//  onclick
    const bgChange = () => {
        let nName = "You clicked me"
        setName(nName)
        let newBg = "#faaf"
        setBg(newBg)
    }
    // on double click
    const bgBack=()=>{
        setBg(purple)
        setName("Ali Raza")
    }

    // on copy
const onCop=()=>{
    setBg("#00fffa")
}

    return (
        <>
            <div className="p-3 mb-5" style={{ backgroundColor: cColor }} onCopy={onCop} >
                <button className="event_btn rounded" onClick={bgChange} onDoubleClick={bgBack} >{evntName}</button>
              <br></br>  this text is used for copy function
            </div>
        </>
    )
}
export default EventBtn;