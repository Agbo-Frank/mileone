import React, { useState } from "react";
import images from "../../assets/images/images";
import './Hero.css'

const Hero1 = ({toggle}) => {

  return (
    <>
        <section className="hero1">
            <div className="hero1-container">
                <ul>
                    <li>All</li>
                    <li>Alakakia</li>
                    <li>Aluu</li>
                    <li>Choba</li>
                    <li>Uniport</li>
                    <li>Rumuosi</li>
                    <li>Ozuoba</li>
                </ul>
                <div className="hero1-content">
                    <div>
                        <h1>Get things Quickly <br/> From Vendors Around <span> You </span></h1>
                    </div>
                    <div>
                        <img src={images.burger} alt="burger"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Hero1;