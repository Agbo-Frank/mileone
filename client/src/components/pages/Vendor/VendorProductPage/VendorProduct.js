import React, { useState } from "react";
import { Header2 } from "../../../index";
// import images from "../../assets/images/images";
import './VendorProduct.css'

const Product = () => {

    return (
        <> 
            <Header2 />
            <section className="product pt-5 mb-5">
                <div className="mileone-container mt-5">
                    <form>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-12 mb-4">
                                {/* set 1 */}
                                <div className="aside">
                                    <div>
                                        <h3>Upload Your Product</h3>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                    </div>
                                    {/* set 2 */}
                                    <div>
                                        <h3>Upload Your Product</h3>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                    </div>
                                    {/* set 3 */}
                                    <div>
                                        <h3>Upload Your Product</h3>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Product Landing Page</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-9 col-12">
                                <div className="body">
                                    {/* title */}
                                    <div className="row">
                                        <div className="col-12 span">
                                            <span>Product Landing Page</span>
                                        </div>
                                    </div>

                                    {/* content */}
                                    <div className="row content">
                                        <div className="col-12 mb-4">
                                            <div className="flex">
                                                <label>Product name</label>
                                                <input type="text" name="" placeholder="Where can your customers find you" />
                                            </div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <div className="flex">
                                                <label>Product Details</label>
                                                <textarea name="" rows="2" cols="50" placeholder="Sell your brand to potential customers" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12 mb-5">
                                            <div className="flex">
                                                <label>Basic Info</label>
                                                <input type="text" name="" placeholder="English" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12 mb-5 mt-4">
                                            <div className="flex">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option value="1">Price Range</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12 mb-5 mt-4">
                                            <div className="flex">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option value="1">Category</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="flex">
                                                <label>Product Details</label>
                                                <textarea name="" rows="7" cols="50" placeholder="Sell your brand to potential customers" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non, scelerisque lorem lacinia platea amet,
                                                turpis purus. Vitae metus lectus lobortis tempus consectetur proin tellus lacus.
                                                Adipiscing sit faucibus cursus cursus arcu hendrerit interdum dui. Tincidunt viverra justo, non ultrices.
                                            </p>
                                            <div className="mt-3">
                                                <div className="input" data-text="Select Your File">
                                                    <input type="file" id="img" name="file" accept="image/*" value="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Product;