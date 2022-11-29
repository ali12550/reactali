import React from "react";
import { useState } from "react";


const Hockp = () => {
    const state = useState();
    const [count, setCount] = useState(5);
    const IntNum = () => {
        setCount(count + 2)
    };
    return (
        <>
            <h2>The value of button is<span className="text-danger ms-4"> {count} </span></h2>
            <button className="border rounded btn btn-primary" onClick={IntNum}>Click Me</button>
        </>
    )
}
export default Hockp;