import React, { useState } from "react";
import images from "../../../assets/images/images";
import { Hero1, HotDeals } from "../../../components";
import './Home.css'

const Home = () => {

  return (
    <>
        <Hero1 />
        <section className="home-brand">
            <div className="home-container">
                <div className="row mile-label">
                    <div className="col-lg-6 col-md-6 col-6">
                        Brands
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 text-end">
                        See all
                    </div>
                </div>
                <div className="row home-content">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood1} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood2} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood1} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood2} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row home-content">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood1} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood2} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood1} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="mile-card">
                            <img src={images.brandfood2} alt="image" />
                            <div className="mile-food-card flex">
                                <div className="">
                                    <img src={images.diamond} alt="image"/>
                                </div>
                                <div className="">
                                    <h4>Kilimangaro</h4>
                                    <h5><i class="fas fa-map-marker-alt"></i> Artillery</h5>
                                    <p>Milk, Egg, Butter, Baking Powder, Sugar, Flour, Chocolate Sauce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <HotDeals />
        <HotDeals />
    </>
  );
};

export default Home;