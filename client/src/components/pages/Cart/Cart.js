import React from "react";
import {Image, Transformation} from 'cloudinary-react';
import Loader from '../../Loader/Loader'
import { ToggleFunc } from '../../../Apollo/reactiveVar/Toggle';
import { AlertFunc } from '../../../Apollo/reactiveVar/AuthAlertVar'
import { useQuery, useReactiveVar, useMutation } from '@apollo/client'
import { REMOVE_CART_ITEM, WISHLIST  } from '../../../Apollo/operations/Mutations'
import {GET_USER} from '../../../Apollo/operations/Queries'
import { CartVar } from '../../../Apollo/reactiveVar/Variables'
import './Cart.css'

function CartItem({cart, removeItem}){
    return(
        <div className="cartItem">
            <i className="fas fa-times" onClick={() => removeItem({
                variables: {
                    id: cart.product._id
                }
            })}></i>
            <Image cloudName="agbofrank" publicId={cart.product.image} secure="true"></Image>
            <div>
                <h1>{cart.product.name}</h1>
                <form className="quatityControl">
                    <p>Quantity:</p>
                    <input type="number" value={cart.quantity}/>
                </form>
                <p>${cart.product.price}</p>
            </div>
        </div>
    )
}
const Cart = () => {
    const carts = useReactiveVar(CartVar)
    
    const token = localStorage.getItem('Token')
    const {loading, error } = useQuery(GET_USER, {
        context:{
            headers:{
                authToken:  token
            }
        },
        onCompleted: (data) => {
            return CartVar(data.getUser.cart)
        },
        onError: async (err) => {
            if(err){
                ToggleFunc({type: 'OPEN_LOGIN_MODEL'})//login model
                await setTimeout(() => AlertFunc({type: 'CLOSE_AUTH_ALERT'}), 5000)
                return AlertFunc({type: 'ERROR_AUTH_ALERT', data: 'Please Login!'})
            }
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
            return CartVar(
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
    const subTotal = carts.reduce((total, item) => {
        return total + (item.quantity * item.product.price)
    }, 0)
    if(loading) return <Loader />
    return (
        <>
            <section className="cart">
                {
                    carts?.map((cart, i) => (
                        <CartItem cart={cart} key={i} removeItem={removeItem}/>
                    ))
                }
            </section>
            <div className="checkOut">
                <h3>Checkout Cart</h3>
                <div>
                    <div>
                        <p>Subtotal</p>
                        <p>${subTotal}</p>
                    </div>
                    <div>
                        <p>Subtotal</p>
                        <p>$100.00</p>
                    </div>
                    <p> Proceed To Checkout</p>
                </div>
            </div>
        </>
    );
};

export default Cart;