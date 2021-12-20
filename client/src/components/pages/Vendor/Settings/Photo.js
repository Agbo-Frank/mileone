import React, { useState } from "react";
import images from "../../../../assets/images/images";
import './Style.css'

const Photo = () => {

  return (
    <>
        <section className="photo mt-5 mb-5">
            <div className="">
                <div className="profile-image mb-5">
                    <img  src={images.aboutClip2} />
                </div>

                <form>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div>
                                <label>Upload Image</label>
                                <div className="input" data-text="Select Your File">
                                    <input type="file" id="img" name="file" accept="image/*" value="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12"></div>
                    </div>
                </form>
            </div>
        </section>
    </>
  );
};

export default Photo;