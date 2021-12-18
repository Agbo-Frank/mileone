import React, { useState } from "react";
import images from "../../assets/images/images";
import './Hero.css'

const Hero1 = () => {

  return (
    <>
        <section className="hero1 hero2">
            <div className="hero1-container">
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