import React from "react";
import { ReactDOM } from "react";
import "./index.css";


function Why_chose(props) {
    return (
        <>
            <div className="py-4">
                <div className="why_choose border py-4">

                    <h3 className=" ">{props.title}</h3>
                    <img className="why_choose_img" src={props.img} />

                </div>
            </div>

        </>
    )
}
export default Why_chose;