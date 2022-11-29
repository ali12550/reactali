import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Hero_section from "./Hero_section";
import Why_chose from "./Why_choose";
import Scard from "./Testimonial";
import Card from "./Card";
import EventBtn from "./Events";
import Forms from "./Formes";
import Multipleform from "./Multipleform";
import Complex_form from "./ComplexForms";
import LoginForm from "./LoginForm";
import Hockp from "./Hocks";
import Hock_challange from "./Hock_chalange";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import why_1 from './images/why-1.png';
import why_2 from './images/why-2.png';
import why_4 from './images/why-4.png';
import why_3 from './images/why-3.png';
import why_5 from './images/why-5.png';
import why_6 from './images/why-6.png';


ReactDOM.render(

  <>
    <Navbar />
    <Hero_section />
    {/* props method */}
    <div className="why_box  container text-center justify-content-around gap-3">
      <Why_chose
        title="India"
        img={why_1}
      />
      <Why_chose
        title="Pak"
        img={why_2}
      />
      <Why_chose
        title="Iran"
        img={why_4}
      />
      <Why_chose
        title="China"
        img={why_3}
      />
      <Why_chose
        title="USA"
        img={why_5}
      />
      <Why_chose
        title="UK"
        img={why_6}
      />
    </div>

    {/* testimonial section */}
    <div className="bg-light">
      <div className="testimonial_container container d-flex gap-3  pt-4 justify-content-center">
        <div className="testimonial_box d-flex flex-column text-center gap-3">
          <img src={Scard[0].imgsrcs} />
          <h5>{Scard[0].id}</h5>
          <p>{Scard[0].titles}</p>
        </div>
        <div className="testimonial_box  d-flex flex-column text-center gap-3">
          <img src={Scard[1].imgsrcs} />
          <h5>{Scard[1].id} </h5>
          <p>{Scard[1].titles}</p>
        </div>
        <div className="testimonial_box d-flex flex-column text-center gap-3">
          <img src={Scard[2].imgsrcs} />
          <h5>{Scard[2].id}</h5>
          <p>{Scard[2].titles}</p>
        </div>
        <div className="testimonial_box d-flex flex-column text-center gap-3">
          <img src={Scard[3].imgsrcs} />
          <h5>{Scard[3].id}</h5>
          <p>{Scard[3].titles}</p>
        </div>

      </div>
    </div>

    {/* hocks system */}
    <div className="hocks text-center py-3">
      <Hockp />
      <Hock_challange />
    </div>

    {/* event button */}
    <div className="text-center">
      <EventBtn />
    </div>
    <Forms></Forms>
    {/* multiple step form */}
    <Multipleform />

    {/* login form */}
    <LoginForm/>
    {/* complex events */}
    <Complex_form/>
  </>,
  document.getElementById("root")
);