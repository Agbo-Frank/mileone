import React, { useState } from "react";
import images from "../../../assets/images/images";
import './Login.css'

const Login = () => {

    return (
        <>
            <section className="auth">
                <div className="mileone-container">
                    <div className="matrix-2"></div>
                    <div className="matrix-1"></div>
                    <div className="matrix-4"></div>
                    <div className="matrix-3"></div>

                    <div className="row pt-5">
                        <div className="col-lg-6 col-12">
                            <div className="login pt-5">
                                <h1 className="pt-5">Login</h1>
                                <form>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <h3 className="text-end">Forgot Password</h3>

                                    <div className="buttons">
                                        <button type="submit" class="btn login-btn normal mt-5">Login</button>
                                        <button type="submit" class="btn login-btn google mt-5">
                                            <div className="flex wrap">
                                                <img src={images.Google} alt="img"/> 
                                                Login with Google
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 pt-5">
                            <div className="register pt-5">
                                <h1>Register</h1>
                                <form>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Name"/>
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>

                                    <div className="buttons">
                                        <button type="submit" class="btn login-btn normal mt-5">Register</button>
                                        <button type="submit" class="btn login-btn google mt-5">
                                            <div className="flex wrap">
                                                <img src={images.Google} alt="img"/> 
                                                Register with Google
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;