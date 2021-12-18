import React, { useState } from "react";
import images from "../../assets/images/images";
import { Header } from "../index";
import './Wishlist.css'

const Wishlist = () => {

    return (
        <>  
            <Header />
            <section className="wishlist">
                <div className="mileone-container">
                    <div className="row mile-label">
                        <div className="col-lg-6 col-md-6 col-6">
                            Wishlist
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 text-end">
                            <div className="col-lg-6 col-md-5 col-12 w-100" style={{display: "flex", justifyContent: "flex-end"}}>
                                <div className="search-width w-50">
                                    <div className="box">
                                        <input className="search-control" type="search" placeholder="Search" aria-label="Search" />
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* item */}
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
                        <div className="col-lg-3 col-md-4 col-6 mb-5">
                            <div className="mile-card mt-5">
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
            </section>
        </>
    );
};

export default Wishlist;