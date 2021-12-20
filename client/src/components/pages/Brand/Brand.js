import React, { useState } from "react";
import images from "../../../assets/images/images";
import { Header, Hero2, HotDeals, Exclusive } from "../../../components";
import './Brand.css'

const Brand = () => {

    return (
        <>
            <Header />
            <Hero2 />
            <section className="brand mt-5">
                <div className="mileone-container">
                    <div className="brands">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-8 mt-2">
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
                            <div className="col-lg-6 col-md-6 col-4 mt-3">
                                <button className="mile-btn-follow1">Follow</button>
                            </div>
                            <div className="col-12 mt-5 mb-5">
                                <div className="row">
                                        <div className="col-lg-2 col-md-2 col-4 active mb-3">Home</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Snacks</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">African</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Ice cream</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Drinks</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Parfait</div>
                                </div>
                                {/* <ul>
                                    <li className="active">Home</li>
                                    <li>Snacks</li>
                                    <li>African</li>
                                    <li>Intercontinental</li>
                                    <li>Ice cream</li>
                                    <li>Drinks</li>
                                    <li>Parfait</li>
                                </ul> */}
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