import React from "react";
import { ReactDOM } from "react";
import "./index.css"
import img_hero from './images/Group _1076.png';

function Hero_section() {
    return (
        <>
            <section className="section_hero position-relative  bg-light py-4">
                <div className="container text-center  py-4 ">
                    <div className="row content_section align-items-center justify-content-center ">
                        <div className="col-md-5">
                            <h2>Hero Section</h2>
                            <p className="m-0 pb-3">this is hero sectionthis is hero sectionthis is hero section this is hero section this is hero section this is hero sectionthis is hero sectionthis is hero section</p>
                        </div>
                        <div className="col-md-5">
                            <img className="img-fluid" src={img_hero} alt="car" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero_section;