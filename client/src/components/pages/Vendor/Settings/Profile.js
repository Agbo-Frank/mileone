import React, { useState } from "react";
// import images from "../../assets/images/images";
import './Style.css'

const Profile = () => {

  return (
    <>
        <section className="profile mt-5">
            <div className="">
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Company Name</label>
                                <input type="text" name="" placeholder="This name will be display on the public profile" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Email Address</label>
                                <input type="email" name="" placeholder="This email will be display on the public profile" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Location</label>
                                <input type="text" name="" placeholder="Please select a location from the dropdown" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Phone number</label>
                                <input type="text" name="" placeholder="Please put a reachable line" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Address</label>
                                <input type="text" name="" placeholder="Where can your customers find you" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Website</label>
                                <input type="text" name="" placeholder="Promote your website with Mileone" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Biography</label>
                                <textarea name="" rows="4" cols="50" placeholder="Sell your brand to potential customers" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Instagram</label>
                                <input type="text" name="" placeholder="Username" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>LinkedIn</label>
                                <input type="text" name="" placeholder="Resource ID" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Twitter</label>
                                <input type="text" name="" placeholder="Username" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Facebook</label>
                                <input type="text" name="" placeholder="Username" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="flex">
                                <label>Youtube</label>
                                <input type="text" name="" placeholder="Username" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  );
};

export default Profile;