import React, { useState } from "react";
import { Link } from "react-router-dom";
// import images from "../../assets/images/images";
import './Cart.css'

const Cart = () => {

    return (
        <>
            <section className="pt-5 cart">
                <div className="mileone-container pt-5">
                    <h2>Cart <span>(1 Item)</span></h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className="product">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Sub-total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <span>Maple Leaf Cake</span>

                                    <div className="row mt-4 action">  
                                        <div className="col-6 save"><i class="fas fa-heart"></i> Moved to Saved Items</div>
                                        <div className="col-6 delete"><i class="fas fa-trash-alt"></i> Remove Item</div>
                                    </div>
                                </th>
                                <td>
                                    <select name="numbers" id="numbers" className="mt-4">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="1"></option>
                                        <option value="4">4</option>
                                    </select>
                                </td>
                                <td><h1 className="mt-4">$35.00</h1></td>
                                <td><h1 className="mt-4">$35.00</h1></td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="row buttons">
                        <div className="col-12 text-end">
                            <Link to="/"><button className="continue">Continue Shopping</button></Link>
                            <Link to=""><button className="pay">Pay Now</button></Link>
                        </div>
                    </div>

                    <div>
                        <h3>Delivery, coupons and more!</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;