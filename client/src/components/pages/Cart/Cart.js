import React, { useState } from "react";
import { useQuery, useReactiveVar, useMutation } from '@apollo/client'
import { Link } from "react-router-dom";
import { Header } from "../../index";
import {AuthVar} from '../../../Apollo/reactiveVar/Auth'
import { REMOVE_CART_ITEM, WISHLIST  } from '../../../Apollo/operations/Mutations'
import {GET_USER} from '../../../Apollo/operations/Queries'
import {CartVar, WishlistVar} from '../../../Apollo/reactiveVar/Cart'
import './Cart.css'

const Cart = () => {
    const user = useReactiveVar(AuthVar)
    const carts = useReactiveVar(CartVar)
    
    const token = localStorage.getItem('Token')
    const {loading, error } = useQuery(GET_USER,{
        context:{
            headers:{
                authToken:  token
            }
        },
        onCompleted: (data) => {
            CartVar(data.getUser.cart)
        }
    })
    const [removeItem] = useMutation(REMOVE_CART_ITEM, {
        context: {
            headers: {
                authToken:  token
            }
        },
        onCompleted: (data) => {
            let id = data.removeFromCart.message.split(' ')[0]
            CartVar(
                CartVar().filter(cart => cart.itemId !== id)
            )
        }
    })
    const [wishlist] = useMutation(WISHLIST, {
        context: {
            headers: {
                authToken:  token
            }
        }
    })
    if(loading) return <div>Loading....</div>
    return (
        <>
            <Header user={user[0]?.user}/>
            <section className="cart">
                <div className="mileone-container pt-5">
                    <h2>Cart <span>(1 Item)</span></h2>
                    
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Sub-total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map(cart => (
                                    <tr key={cart?.product?._id}>
                                        <th scope="row">
                                            <span>{cart?.product?.name}</span>
                                            <div className="action">  
                                                <div onClick={() => wishlist({
                                                    variables: {
                                                        id: cart?.product?._id
                                                    }
                                                })}><i class="fas fa-heart"></i> Moved to Saved Items</div>
                                                <div onClick={() => removeItem({
                                                    variables: {
                                                        id: cart?.product?._id
                                                    }
                                                })}><i class="fas fa-trash-alt"></i> Remove Item</div>
                                            </div>
                                        </th>
                                        <td>
                                            <select name="numbers" id="numbers">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </td>
                                        <td><h1>${cart?.product?.price}</h1></td>
                                        <td><h1>${cart?.product?.price * cart.quantity}</h1></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div>
                        <div className="buttons">
                            <Link to="/">Continue Shopping</Link>
                            <Link to="">Pay Now</Link>
                        </div>
                        <h3>Delivery, coupons and more!</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;