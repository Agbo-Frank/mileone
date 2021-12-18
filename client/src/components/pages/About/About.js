import React, { useState } from "react";
import images from "../../../assets/images/images";
import { Header, Hero2 } from "../../../components";
import { Link } from "react-router-dom";
import './About.css'

const About = () => {

    return (
        <>
            <Header />
            <Hero2 />

            <section className="about">
                <div className="mileone-container">
                    <h3 className="mt-5">Changing Market for the better</h3>
                    <p className="mt-4">The lorem ipsum is a placeholder text used in publishing and graphic design.
                        This filler text is a short paragraph that contains all the letters of the alphabet. The characters
                        are spread out evenly so that the reader's attention is focused on the layout of the
                        text instead of its content.
                    </p>
                </div>
            </section>

            <section className="about-section-2">
                <div className="mileone-container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">
                            <img src={images.aboutImage} />
                        </div>
                        <div className="col-lg-7 col-md-6 col-12">
                            <h3 className="mb-2">Mile One</h3>
                            <p>
                                The lorem ipsum is a placeholder text used in publishing and
                                graphic design. This filler text is a short paragraph that contains all
                                the letters of the alphabet. The characters are spread out evenly
                                so that the reader's attention is focused on the layout of the text
                                instead of its content.
                            </p>
                            <p className="mt-5">
                                The lorem ipsum is a placeholder text used in publishing and
                                graphic design. This filler text is a short paragraph that contains all
                                the letters of the alphabet. The characters are spread out evenly
                                so that the reader's attention is focused on the layout of the text
                                instead of its content.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section-3">
                <div className="mileone-container">
                    <h4>WHAT WE PROVIDE</h4>
                    <h1>your favourite food, Snack and More via different vendors</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <img src={images.aboutClip1} />
                            <h3>Easy to Order</h3>
                            <p>You only need a few steps in ordering food</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <img src={images.aboutClip2} />
                            <h3>fastest delivery</h3>
                            <p>Delivery that is always ontime even faster</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <img src={images.aboutClip3} />
                            <h3>Best quality</h3>
                            <p>Not only fast for us quality is also  number one</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section-4">
                <div className="mileone-container">
                    <h6>Our Menu</h6>
                    <div className="row">
                        <div className="col-6">
                            <h1>menu that always make you fall in love</h1>
                        </div>
                        <div className="col-6 text-end">
                            <div>
                                <Link to=""><i class="fas fa-chevron-circle-left left-icon"></i></Link>
                                <Link to=""><i class="fas fa-chevron-circle-right right-icon"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12 all-dishes">
                            <div className="icons">
                                <ul>
                                    <li className="flex i-active">
                                        <img src={images.restaurant} />
                                        <Link to="">All Dishes</Link>
                                    </li>
                                    <li className="flex">
                                        <img src={images.cakes}  />
                                        <Link to=""> </Link>
                                    </li>
                                    <li className="flex">
                                        <img src={images.icecream} />
                                        <Link to=""> </Link>
                                    </li>
                                    <li className="flex">
                                        <img src={images.snacks} />
                                        <Link to=""> </Link>
                                    </li>
                                    <li className="flex">
                                        <img src={images.dishes} />
                                        <Link to=""> </Link>
                                    </li>
                                    <li className="flex">
                                        <img src={images.drinks} />
                                        <Link to=""> </Link>
                                    </li>
                                    <li className="flex">
                                        <img src={images.intercontinental} />
                                        <Link to=""> </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <div className="menu-item">
                                <div className="row">
                                    {/* item */}
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="mile-card">
                                            <img src={images.food2} alt="image" />
                                            <div className="mile-food-card flex">
                                                <div className="">
                                                    <img src={images.diamond} alt="image" />
                                                </div>
                                                <div className="items">
                                                    <h4>Kilimangaro</h4>
                                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery Port Harcourt</h5>
                                                    <img src={images.star} alt="image" className="star" />
                                                    <p>$35.00</p>
                                                    <div className="button mt-3">
                                                        <button type="button" className="mile-addcart">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="mile-card">
                                            <img src={images.food2} alt="image" />
                                            <div className="mile-food-card flex">
                                                <div className="">
                                                    <img src={images.diamond} alt="image" />
                                                </div>
                                                <div className="items">
                                                    <h4>Kilimangaro</h4>
                                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery Port Harcourt</h5>
                                                    <img src={images.star} alt="image" className="star" />
                                                    <p>$35.00</p>
                                                    <div className="button mt-3">
                                                        <button type="button" className="mile-addcart">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="mile-card">
                                            <img src={images.food2} alt="image" />
                                            <div className="mile-food-card flex">
                                                <div className="">
                                                    <img src={images.diamond} alt="image" />
                                                </div>
                                                <div className="items">
                                                    <h4>Kilimangaro</h4>
                                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery Port Harcourt</h5>
                                                    <img src={images.star} alt="image" className="star" />
                                                    <p>$35.00</p>
                                                    <div className="button mt-3">
                                                        <button type="button" className="mile-addcart">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="mile-card">
                                            <img src={images.food2} alt="image" />
                                            <div className="mile-food-card flex">
                                                <div className="">
                                                    <img src={images.diamond} alt="image" />
                                                </div>
                                                <div className="items">
                                                    <h4>Kilimangaro</h4>
                                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery Port Harcourt</h5>
                                                    <img src={images.star} alt="image" className="star" />
                                                    <p>$35.00</p>
                                                    <div className="button mt-3">
                                                        <button type="button" className="mile-addcart">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="mile-card">
                                            <img src={images.food2} alt="image" />
                                            <div className="mile-food-card flex">
                                                <div className="">
                                                    <img src={images.diamond} alt="image" />
                                                </div>
                                                <div className="items">
                                                    <h4>Kilimangaro</h4>
                                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery Port Harcourt</h5>
                                                    <img src={images.star} alt="image" className="star" />
                                                    <p>$35.00</p>
                                                    <div className="button mt-3">
                                                        <button type="button" className="mile-addcart">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <div className="mile-card">
                                            <img src={images.food2} alt="image" />
                                            <div className="mile-food-card flex">
                                                <div className="">
                                                    <img src={images.diamond} alt="image" />
                                                </div>
                                                <div className="items">
                                                    <h4>Kilimangaro</h4>
                                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery Port Harcourt</h5>
                                                    <img src={images.star} alt="image" className="star" />
                                                    <p>$35.00</p>
                                                    <div className="button mt-3">
                                                        <button type="button" className="mile-addcart">View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section-5">
                <div className="mileone-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={images.clip4} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h4>what they say</h4>
                            <h1>what our customer say about us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit varius eget pulvinar rhoncus eros, magna. Orci sed aenean scelerisque arcu. Venenatis odio etiam bibendum in nulla.</p>

                            <div className="flex">
                                <img src={images.timage} className="timage"/>
                                <div className="mt-5">
                                    <h3>Frank Agbo</h3>
                                    <small>Customer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section-6">
                <div className="mileone-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 mb-5">
                            <div className="blue">
                                <h3>We’ve Got What You Want</h3>
                                <p>The lorem ipsum is a placeholder 
                                    text used in publishing and graphic 
                                    design. This filler text is a short 
                                    paragraph that contains all the 
                                    letters of the alphabet. The 
                                    characters are spread out evenly so 
                                    that the reader's attention is 
                                    focused on the layout of the text 
                                    instead of its content.
                                </p>
                                <Link to="">Learn More <i class="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mb-5">
                            <div className="orange">
                                <h3>Get an Account To Stay Shopping</h3>
                                <p>The lorem ipsum is a placeholder 
                                    text used in publishing and graphic 
                                    design. This filler text is a short 
                                    paragraph that contains all the 
                                    letters of the alphabet. The 
                                    characters are spread out evenly so 
                                    that the reader's attention is 
                                    focused on the layout of the text 
                                    instead of its content.
                                </p>
                                <Link to="">Learn More <i class="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mb-5">
                            <div className="white">
                                <h3>Become a vendor</h3>
                                <p>The lorem ipsum is a placeholder 
                                    text used in publishing and graphic 
                                    design. This filler text is a short 
                                    paragraph that contains all the 
                                    letters of the alphabet. The 
                                    characters are spread out evenly so 
                                    that the reader's attention is 
                                    focused on the layout of the text 
                                    instead of its content.
                                </p>
                                <Link to="">Learn More <i class="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;