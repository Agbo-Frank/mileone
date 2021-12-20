import React, { useState } from "react";
import images from "../../../assets/images/images";
import { Hero2, HotDeals, Exclusive } from "../../../components";
import './Brand.css'

const Brand = () => {

    return (
        <>
            <Hero2 />
            <section className="mt-5">
                <div className="mileone-container">
                    <div className="brands">
                        <div className="row">
                            <div className="col-6 mt-2">
                                <div className="flex">
                                    <div>
                                        <img src={images.diamond} alt="image" />   
                                    </div>
                                    <div className="mt-3">
                                        <h4>MileOne Organization</h4>
                                        <p>Mile1, Port Harcourt, Rivers State</p>
                                        <button className="mile-btn-follow">103 followers</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mt-3">
                                <button className="mile-btn-follow1">Follow</button>
                            </div>
                            <div className="col-12 mt-5 mb-5">
                                <ul>
                                    <li className="active">Home</li>
                                    <li>Snacks</li>
                                    <li>African</li>
                                    <li>Intercontinental</li>
                                    <li>Ice cream</li>
                                    <li>Drinks</li>
                                    <li>Parfait</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HotDeals />
            <Exclusive />
            <Exclusive />
        </>
    );
};

export default Brand;