import React from "react";
import "./index.css"
const Form3=()=>{
    return(
        <>
 <div className="m-auto container  p-5 rounded">
                <div className="row justify-content-center gap-4">
                    <label className="col-1">Address</label>
                    <input className="col-4" type="text" placeholder="Address"/>
                </div>
                <div className="row justify-content-center gap-4 pt-4">
                    <label className=" col-1">Job</label>
                    <input className="col-4" type="text" placeholder="Job" />
                </div>

            </div>
        </>
    )
}
export default Form3;