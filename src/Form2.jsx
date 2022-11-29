import React from "react";
import "./index.css";

const Form2 = () => {
    return (
        <>
            <div className="m-auto container  p-5 rounded">
                <div className="row justify-content-center gap-4">
                    <label className="col-1">Gmail</label>
                    <input className="col-4" type="email" placeholder="Gmail" />
                </div>
                <div className="row justify-content-center gap-4 pt-4">
                    <label className=" col-1">Phone</label>
                    <input className="col-4" type="number" placeholder="your Phone Number" />
                </div>

            </div>
        </>
    )
}
export default Form2;