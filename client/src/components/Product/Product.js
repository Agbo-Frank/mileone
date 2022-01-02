import React, { useState, useRef, } from "react";
import { Link } from "react-router-dom";
import { useMutation, useReactiveVar } from '@apollo/client'
import { Stars } from '../../components'
import {AuthVar} from '../../Apollo/reactiveVar/Auth'
import { init, reducer } from '../../Reducer/reducer';
import {Image, Transformation} from 'cloudinary-react';
import { ADD_TO_CART, WISHLIST } from "../../Apollo/operations/Mutations";
import { setRating } from '../../helpFunctions/functions'
import './product.css'


function Product({product, toggle }){
    const token = localStorage.getItem('Token')
    const aveRate = setRating(product?.rating)
    function add(id, type){
        if(!token){
            toggle[0](true)//login pop
            return false
        }
        else{
            if(type === "addToCart"){
               return addToCart({
                    variables:{
                        id
                    }
                })
            }
            else{
                return wishlist({
                    variables:{
                        id: product._id
                    }
                })
            }
        }
    }
    const [addToCart] = useMutation(ADD_TO_CART, {
        context:{
            headers:{
                authToken:  token
            }
        },
        onCompleted: (data) => {
            console.log(data)
            // setTimeout(toggle[1]({
            //     message: '',
            //     type: false,
            //     show: false
            // }), 5000)

            toggle[1]({
                message: "Product Successfully Added",
                type: true,
                show: true
            })
        },
        onError: (err) => {
            if(err){
                console.log(err)
                toggle[0](true)
            }
        }
    })
    const [wishlist] = useMutation(WISHLIST, {
        context:{
            headers:{
                authToken: token 
            }
        },
        onCompleted: (data) => {
            console.log(data)
            toggle[1]({
                message: "Product Successfully Added",
                type: true,
                show: true
            })
        },
        onError: (err) => {
            if(err){
                console.log(err)
                toggle[0](true)
            }
        }
    })
    
    return(
        <div className="productCard">
            <Link to={`/product/${product._id}`}>
            <Image cloudName="agbofrank" publicId={product.image} secure="true">
                <Transformation background="#E9F3FD" />
                <Transformation width="270" height="240" crop="fill" gravity="center" />
                <Transformation radius="80" />
            </Image>
            </Link>
            <div>
            <Image cloudName="agbofrank" publicId={product?.vendor?.logo} secure="true"></Image>
                <div>
                    <p>{product?.name}</p>
                    <p><i class="fas fa-map-marker-alt"></i>{product?.vendor?.name}</p>
                    <Stars rate={aveRate}/>
                    <h2>${product.price}</h2>
                    <div>
                        <button 
                        type="button" 
                        onClick={() => add(product._id, "addToCart")}>Add to Cart</button>
                        <button 
                        type="button"
                        onClick={() => add(product._id, "wishlist")}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product