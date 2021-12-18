import React, { useState } from "react";
import images from "../../assets/images/images";
import './Hero.css'

const Hero1 = () => {

  return (
    <>
        <section className="hero1">
            <div className="hero1-container">
                <div className="hero1-items">
                    <div className="row">
                        {/* <div className="col-12">
                            <ul>
                                <li className="active">All</li>
                                <li>Alakakia</li>
                                <li>Aluu</li>
                                <li>Choba</li>
                                <li>Uniport</li>
                                <li>Rumuosi</li>
                                <li>Ozuoba</li>
                            </ul>
                        </div> */}

                        <div className="col-12 mt-5 mb-5">
                                <div className="row">
                                        <div className="col-lg-2 col-md-2 col-4 active mb-3">All</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Alakakia</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Aluu</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Choba</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Uniport</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Rumuosi</div>
                                        <div className="col-lg-2 col-md-2 col-4 mb-3">Ozuoba</div>
                                </div>
                            </div>
                    </div>
                    
                </div>
                <div className="row hero1-content">
                    <div className="col-lg-8">
                        <h1>Get things Quickly <br/> From Vendors Around <span> You </span></h1>
                    </div>
                    <div className="col-lg-4">
                        <img src={images.burger} alt="burger"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Hero1;