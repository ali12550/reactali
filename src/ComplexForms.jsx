import React from "react";
import "./index.css"
import { useState } from "react";
const Complex_form = () => {

    const [fullName, setfullname] = useState({
        fname: "",
        password: "",
        gmail: ""

    });
    // input field
    const nameFieldEvent = (event) => {
        console.log(event.target.value)
    }
    const SubFormEvent = (event) => {
        event.preventDefault();
        alert("dl")
    }

    return (
        <>
            <form className="text-center pt-5 text-danger" onSubmit={SubFormEvent}>
                <h1>complex events form</h1>
                <div>
                    <h3 className="mb-2">Hi::: {fullName.fname} {fullName.password}  {fullName.gmail} </h3>
                   
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="fName"
                        onChange={nameFieldEvent}
                        value={fullName.fname} />
                    <br />

                    <input
                        type="text"
                        placeholder="Enter password"
                        name="pAssword"
                        onChange={nameFieldEvent}
                        value={fullName.password} />
                    <br />
                    <input
                        type="text"
                        placeholder="Gmail"
                        name="Gmail"
                        onChange={nameFieldEvent}
                        value={fullName.gmail} />
                    <br />
                    <button type="submit" className="mt-2" >Submit</button>
                </div>
            </form>
        </>
    )
}
export default Complex_form;