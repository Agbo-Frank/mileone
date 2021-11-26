import React, { useState } from "react";
import images from "../../assets/images/images";
import './Header.css'

const Header = () => {

  return (
    <>
        <header className="header">
            <div className="row header-container">
                <div className="col-lg-3 col-md-3 col-12 logo">
                    <i className="fas fa-bars"></i>
                    MileOne Logo
                </div>
                <div className="col-lg-6 col-md-5 col-12">
                    <div className="box">
                        <input className="search-control" type="search" placeholder="Search" aria-label="Search" />
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <ul className="">
                        <li className="active">Home</li>
                        <li>About Us</li>
                        <button type="button">Sign In <i className="fas fa-user-plus"></i></button>
                    </ul>
                </div>
            </div>
        </header>
    </>
  );
};

export default Header;