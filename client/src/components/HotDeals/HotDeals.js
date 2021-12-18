import React, { useState } from "react";
import images from "../../assets/images/images";
import { Link } from "react-router-dom";
import './HotDeals.css'

const HotDeals = () => {

  return (
    <>
        <section className="hotdeals">
            <div className="home-container">
                <div className="row mile-label">
                    <div className="col-lg-6 col-md-6 col-6">
                        Hot deals
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 text-end">
                        See all
                    </div>
                </div>
                <div className="row hotdeals-content">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.food2} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <Link to="/wishlist">
                                            <button type="button" className="mile-wishlist mb-2">Wishlist</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.brandfood2} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <Link to="/wishlist">
                                            <button type="button" className="mile-wishlist mb-2">Wishlist</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.brandfood1} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <Link to="/wishlist">
                                            <button type="button" className="mile-wishlist mb-2">Wishlist</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.food1} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <Link to="/wishlist">
                                            <button type="button" className="mile-wishlist mb-2">Wishlist</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row hotdeals-content">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.food2} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <button type="button" className="mile-wishlist mb-2">Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.brandfood2} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <button type="button" className="mile-wishlist mb-2">Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.brandfood1} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <button type="button" className="mile-wishlist mb-2">Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <Link to="/product">
                                <img src={images.food1} alt="image" />
                            </Link>
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <img src={images.star} alt="image" className="star"/>
                                    <p>$35.00</p>
                                    <div>
                                        <button type="button" className="mile-addcart mb-2">Add to Cart</button>
                                        <button type="button" className="mile-wishlist mb-2">Wishlist</button>
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

export default HotDeals;