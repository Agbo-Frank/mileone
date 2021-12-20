import React, { useState } from "react";
import { Header2, Profile, Photo, Privacy } from "../../../index";
import { Link, NavLink } from "react-router-dom";
// import images from "../../assets/images/images";
import './Style.css'

const Settings = () => {

    const [active, setActive] = useState("first")

    return (
        <>
            <Header2 />
            <section className="settings pt-5 mb-5">
                <div className="mileone-container pt-5">
                    <h1>Profile & Settings</h1>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="row">
                                <div className="col-4" onClick={()=> setActive("first")}><Link to="" className="">MileOne Profile </Link></div>
                                <div className="col-4" onClick={()=> setActive("second")}><Link to="">Profile Photo </Link></div>
                                <div className="col-4" onClick={()=> setActive("third")}><Link to="">Privacy and Security </Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12"></div>
                    </div>

                </div>
                <hr />
                <div className="mileone-container">
                    <div>
                        {active === "first" && <Profile />}
                        {active === "second" && <Photo />}
                        {active === "third" && <Privacy />}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Settings;