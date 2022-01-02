import React, { useState, useRef } from "react";
import { Header2, Profile, Photo, Privacy } from "../../../index";
import { Link, NavLink } from "react-router-dom";
// import images from "../../assets/images/images";
import './Style.css'

const Settings = () => {

    const [active, setActive] = useState("first")
    const [Doc, setDoc] = useState({
        name: '',
        address: '',
        password: '',
        cordinates: '',
        biography: '',
        linkedIn: '',
        facebook: '',
        youtub: '',
        email: '',
        instagram: '',
        twitter: '',
        pnumber: '',
        image: '',
        // logo: ''
    })

    return (
        <>
            <Header2 />
            <section className="settings">
                <div className="settings-header">
                    <h1>Profile Settings</h1>
                    <div>
                        <div className={active === "first" && "active"} onClick={()=> setActive("first")}>MileOne Profile</div>
                        <div className={active === "second" && "active"} onClick={()=> setActive("second")}>Profile Photo</div>
                        <div className={active === "third" && "active"} onClick={()=> setActive("third")}>Upload Product</div>
                    </div>
                </div>
                <div>
                    {active === "first" && <Profile click={()=> setActive("second")} setDoc={setDoc}/>}
                    {active === "second" && <Photo Doc={Doc} click={()=> setActive("third")}/>}
                    {active === "third" && <Privacy />}
                </div>
            </section>

        </>
    );
};

export default Settings;