import React from "react";
import { useState } from "react";

const Hock_challange = () => {
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setTime] = useState(newTime);
    
    const btnTime = () => {
         newTime = new Date().toLocaleTimeString();
        
        setTime(newTime)
    }
    return (
        <>
            <h5>Time Challange  {cTime}</h5>
            <button className="bg-primary text-white rounded border" onClick={btnTime}>Button</button>
        </>
    )
}
export default Hock_challange;