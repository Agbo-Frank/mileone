import React, { useState } from "react";
import { Header2 } from "../../../index";
import images from "../../../../assets/images/images";
import './Pricing.css'

const Pricing = () => {

  return (
    <>
        <Header2 />
        <section className="pricing pt-5">
            <div className="mileone-container mt-5">
                <div className="row">
                    <div className="col-2">
                        <img src={images.brandfood1} />
                    </div>
                    <div className="col-10">
                        <h4>Product price</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non, scelerisque lorem lacinia platea amet, turpis purus. 
                            Vitae metus lectus lobortis tempus consectetur proin tellus lacus. 
                            Adipiscing sit faucibus cursus cursus arcu hendrerit interdum dui. Tincidunt viverra justo, non ultrices.
                        </p>

                        <div className="flex">
                            <div>
                                <input type="button" value="Naira" className="naira"/>
                            </div>
                            <div>
                                <input type="text" placeholder="1,300" className="price" />
                            </div>
                            <div>
                                <input type="submit" value="Save" className="save" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Pricing;