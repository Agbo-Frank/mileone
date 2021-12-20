import React, { useState } from "react";
import images from "../../../assets/images/images";
import { Header, Others, Special } from "../../../components";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
import './Product.css'

const Product = () => {
    const options = {
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <>  
            <Header />
            <section className="mb-5 mile-product">
                <div className="">
                    <div className="row pt-5">
                        <div className="col-lg-2 col-md-2 col-1"></div>
                        <div className="col-lg-8 col-md-7 col-10">
                            <img src={images.photo} />
                        </div>
                        <div className="col-lg-2 col-md-3 col-1 mt-4 product-image">
                            <div className="mile-card">
                                <img src={images.brandfood2} alt="image" />
                                <div className="mile-food-card">
                                    <div className="">
                                        <p>$35.00</p>
                                        <img src={images.star} alt="image" className="star mb-2" />
                                        <div>
                                            <button type="button" className="mile-addcart">Add to Cart</button>
                                            <button type="button" className="mile-wishlist">Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mile-product-section-container">
                    <div className="row mt-3">
                        <div className="col-9">
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
                        <div className="col-3 mt-3">
                            <button className="mile-btn-follow1">Follow</button>
                        </div>
                    </div>
                    <div className="text-content mt-4">
                        <h4>Maple Leaf Cake</h4>
                        <p className="mt-3">Maple Leaf Cake is a mixture of Lorem lorem ispum lotat lorem lorem Maple Leaf Cake is a mixture of Lor
                            em lorem ispum lotat lorem lorem Maple Leaf Cake is a mixture of Lorem lorem ispum lotat lorem lorem
                            Maple Leaf Cake is a mixture of Lor em lorem ispum lotat lorem lorem Leaf Cake is a mixture of Lor em
                            lorem ispum lotat lorem lorem </p>
                    </div>
                    <div className="mt-5 pt-4 pb-4 top_companies">
                        <h3>Top Companies that trust Mileone</h3>
                        <div className="top_companies_slider">
                            <OwlCarousel
                                className="slider-items owl-carousel"
                                {...options}
                                id="slider_cat"
                            >
                                <div className="item">
                                    <img src={images.logo1} />
                                </div>
                                <div className="item">
                                    <img src={images.logo2} />
                                </div>
                                <div className="item">
                                    <img src={images.logo3} />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="customer_feedback_box">
                            <div className="row">
                                <div className="col-6">Customer Feedback</div>
                                <div className="col-6 text-end">See all</div>
                            </div>
                        </div>
                        <div className="customer_feedback_content">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <h4>Product Ratings (xxx)</h4> 
                                    <div className="rating-box mt-4">
                                        <h1>2.7</h1>
                                        <img src={images.star} />
                                    </div>
                                    <div className="mt-4 rating">
                                        <ul>
                                            <li> 
                                                <div className="row">
                                                    <div className="col-2">5</div>
                                                    <div className="col-3 mt-1"><img src={images.singlestar} /></div>
                                                    <div className="col-3">(xxx)</div>
                                                    <div className="col-4">
                                                        <div class="progress mt-1">
                                                            <div class="progress-bar w-50" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> 
                                                <div className="row">
                                                    <div className="col-2">4</div>
                                                    <div className="col-3 mt-1"><img src={images.singlestar} /></div>
                                                    <div className="col-3">(xxx)</div>
                                                    <div className="col-4">
                                                        <div class="progress mt-1">
                                                            <div class="progress-bar w-50" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> 
                                                <div className="row">
                                                    <div className="col-2">3</div>
                                                    <div className="col-3 mt-1"><img src={images.singlestar} /></div>
                                                    <div className="col-3">(xxx)</div>
                                                    <div className="col-4">
                                                        <div class="progress mt-1">
                                                            <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> 
                                                <div className="row">
                                                    <div className="col-2">2</div>
                                                    <div className="col-3 mt-1"><img src={images.singlestar} /></div>
                                                    <div className="col-3">(xxx)</div>
                                                    <div className="col-4">
                                                        <div class="progress mt-1">
                                                            <div class="progress-bar w-50" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> 
                                                <div className="row">
                                                    <div className="col-2">1</div>
                                                    <div className="col-3 mt-1"><img src={images.singlestar} /></div>
                                                    <div className="col-3">(xxx)</div>
                                                    <div className="col-4">
                                                        <div class="progress mt-1">
                                                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <div className="reviews">
                                        <h4 className="pr">Product Reviews (xxx)</h4>
                                        <div className="mt-3 review-box">
                                            <img src={images.star} className="mb-4" />
                                            <p>Lorem lorem ispum lotat lorem  lorem Maple Leaf Cake is a mixture of Lor
                                                em lorem ispum lotat lorem Cake is a mixture of Lorem lorem ispum lotat 
                                                lorem 
                                            </p>
                                            <div className="row mt-5">
                                                <div className="col-6">Date and Customer</div>
                                                <div className="col-6 text-end">Verified Purchase</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 review-box">
                                            <img src={images.star} className="mb-4" />
                                            <p>Lorem lorem ispum lotat lorem  lorem Maple Leaf Cake is a mixture of Lor
                                                em lorem ispum lotat lorem Cake is a mixture of Lorem lorem ispum lotat 
                                                lorem 
                                            </p>
                                            <div className="row mt-5">
                                                <div className="col-6">Date and Customer</div>
                                                <div className="col-6 text-end">Verified Purchase</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 review-box">
                                            <img src={images.star} className="mb-4" />
                                            <p>Lorem lorem ispum lotat lorem  lorem Maple Leaf Cake is a mixture of Lor
                                                em lorem ispum lotat lorem Cake is a mixture of Lorem lorem ispum lotat 
                                                lorem 
                                            </p>
                                            <div className="row mt-5">
                                                <div className="col-6">Date and Customer</div>
                                                <div className="col-6 text-end">Verified Purchase</div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Others />
            <Special />
        </>
    );
};

export default Product;