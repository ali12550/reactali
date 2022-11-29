import React from "react";
import "./index.css"
import { useState } from "react";

const Forms = () => {
    const [name, setName] = useState();
    const [fullName, setFullname] = useState()
    const inputField = (event) => {
        setName(event.target.value)
    };
    const submitForm = () => {
        setFullname(name)
    }
    return (
        <>
            <div className="text-center mb-5">
                <h2>{fullName} </h2>
                <input className="form_field" value={name} type="text" placeholder="This is form event in React" onChange={inputField} />
                <button onClick={submitForm}>Form</button>
            </div>
        </>
    )
}
export default Forms;