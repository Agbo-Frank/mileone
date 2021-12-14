import React, { useState } from "react";
import images from "../../assets/images/images";
import './Footer.css'

const Header = () => {

  return (
    <>
        <section className="footer">
            <div className="footer-container">
                <div className="row before-line">
                    <div className="col-lg-3 col-md-4 col-12">
                        <img src={images.footerLogo} alt="FooterLogo" className="footerLogo"/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <h4>New to Mileone?</h4>
                        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                        <div className="mile-box">
                            <input className="mile-input"/>
                            <img src={images.navigation} alt="navclick" className="navclick" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-12 text-end">
                        <div className="">
                            <div className="">
                                {/* <img src={images.footerLogo} alt="FooterLogo" className="footerLogo"/> */}
                                <div>
                                    <h4>Download the free Mileone App</h4>
                                    <p>Get access to exclusive offers!</p>
                                </div>
                            </div>
                            <div>
                                <button type="button" className="mile-btn mr-3">App Store</button>
                                <button type="button" className="mile-btn">Play Store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-line"></div>
            <div className="footer-container under-line">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                        <h4>Become a Friend</h4>
                        <ul>
                            <li>Help a center</li>
                            <li>FAQs</li>
                            <li>Report a problem</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <h4>About Mileone</h4>
                        <ul>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-4 col-12">
                        <h4>Make Money With Mileone</h4>
                        <ul>
                            <li>Sell on Mileone</li>
                            <li>Become a Logistics Service Partner</li>
                            <li>Become a Sales Consultant</li>
                        </ul>
                    </div>
                </div>

                <div className="social">
                    Join us on
                    <ul>
                        <li><a href=""><img src={images.facebook} alt="social"/></a></li>
                        <li><a href=""><img src={images.instagram} alt="social"/></a></li>
                        <li><a href=""><img src={images.twitter} alt="social"/></a></li>
                        <li><a href=""><img src={images.tiktok} alt="social"/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default Header;