import React from "react";
import "./index.css"
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { useState } from "react";

const Multipleform = () => {
    const [cStep, setForm] = useState(1);
// validation 
 const handleVali=(e)=>{
    e.preventDefault()
}

    return (
        <>
            <section className="bg-light p-5">
                <h3 className="text-center">Step :{cStep} </h3>
                <form onSubmit={handleVali}>

                    {/* show card according to steps */}
                    {cStep == 1 ? <Form1 /> : cStep == 2 ? <Form2 /> : <Form3 />
                    }
                    {/* buttons */}
                    <div className="d-flex justify-content-center gap-5">
                        {
                            cStep > 1 &&
                            <button type="submit" className="px-3 py-1 bg-primary rounded-2 border-0"
                                onClick={
                                    () => {
                                        const next = cStep - 1;
                                        setForm(next);
                                    }}
                            >Back</button>
                        }
                        {
                            cStep < 3 &&
                            <button type="submit" className="px-3 py-1 bg-primary rounded-2 border-0" onClick={
                                () => {
                                    const next = cStep + 1;
                                    setForm(next);
                                }}
                            >Next</button>
                        }

                    </div>
                </form>



            </section>
        </>
    )
}
export default Multipleform;