import React from "react";
import "./index.css";


const Form1 = () => {
    return (
        <>

            <div className="m-auto container  p-5 rounded">
                <div className="row justify-content-center gap-4">
                    <label className="col-1">Name</label>
                    <input className="col-4 name" type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="row justify-content-center gap-4 pt-4">
                    <label className=" col-1">Password</label>
                    <input className="col-4 password" type="password" name="password" placeholder="Enter your password" />
                </div>

            </div>

        </>
    )
}
export default Form1;