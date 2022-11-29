import React from "react";
import "./index.css"
import { useState } from "react";
const LoginForm = () => {

    const [uname, setname] = useState("");
    const [ufullname, setfullname] = useState();
    const [upassword, setupassword] = useState("");
    const [ufulpassword, setufulpassword] = useState();
    const SubForm = (event) => {
        event.preventDefault();
        setfullname(uname)
        setufulpassword(upassword)
    }
    // input field
    const nameField = (event) => {
        setname(event.target.value)
    }
    const passwordField = (event) => {
        setupassword(event.target.value)
    }

    // three Dots
    const ThreeDots=["Ali ", "Raza ","waseer"]
    const FullDots=["Name  ", ...ThreeDots ," ","Web Developer"]
    return (
        <>
            <form className="text-center" onSubmit={SubForm}>
                <div>
                    <h3 className="mb-2">User Name : {ufullname}</h3>
                    <h3>Password  : {ufulpassword}</h3>
                    <br />
                    <input placeholder="User Name" type="text" onChange={nameField} value={uname} />
                    <br />

                    <input placeholder="Password" type="text" onChange={passwordField} />
                    <br />
                    <button type="submit" className="mt-2" >Submit</button>
                </div>
            </form>
            <div>
                <h1 className="text-info text-center bg-success">Three Dots</h1>
                <h5>{FullDots}</h5>

            </div>
        </>
    )
}
export default LoginForm;