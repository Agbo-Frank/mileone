import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { Stars } from '../../components'
import { ModelFunc } from '../../Apollo/reactiveVar/Model';
import { ToggleFunc } from '../../Apollo/reactiveVar/Toggle';
import { AlertFunc } from '../../Apollo/reactiveVar/AuthAlertVar'
import {Image, Transformation} from 'cloudinary-react';
import { ADD_TO_CART, WISHLIST } from "../../Apollo/operations/Mutations";
import { setRating } from '../../helpFunctions/functions'
import './product.css'


function Product({ product }){
    const token = localStorage.getItem('Token')
    const aveRate = setRating(product?.rating)
    async function add(id, type){
        if(!token){
            ToggleFunc({type: 'OPEN_LOGIN_MODEL'})//login pop
            await setTimeout(() => AlertFunc({type: 'CLOSE_AUTH_ALERT'}), 5000)
            return AlertFunc({type: 'ERROR_AUTH_ALERT', data: 'Please Login!'})
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
    const configuration = {
        context:{
            headers:{
                authToken: token 
            }
        },
        onCompleted: async (data) => {
            await setTimeout(() => AlertFunc({type: 'CLOSE_ALERT'}), 3000)
            return AlertFunc({type: 'SUCCESS_ALERT', data: 'Product Successfully Added'})
        },
        onError: async (err) => {
            if(err){
                ToggleFunc({type: 'OPEN_LOGIN_MODEL'})//login model
                // const message1 = err.networkError
                // console.log(message1, err.graphQLErrors)
                await setTimeout(() => AlertFunc({type: 'CLOSE_AUTH_ALERT'}), 5000)
                return AlertFunc({type: 'ERROR_AUTH_ALERT', data: 'Please Login!'})
            }
        }
    }
    const [addToCart] = useMutation(ADD_TO_CART, { ...configuration })
    const [wishlist] = useMutation(WISHLIST, { ...configuration })
    
    return(
        <div className="productCard">
            <Link to={`/product/${product._id}`}>
                <Image cloudName="agbofrank" publicId={product.image} secure="true">
                    <Transformation width="270" height="240" crop="fill" gravity="center" />
                </Image>
            </Link>
            <div>
            <Image cloudName="agbofrank" publicId={product?.vendor?.logo} secure="true"></Image>
                <div>
                    <p>{product?.name}</p>
                    <p><i class="fas fa-store"></i> {product?.vendor?.name}</p>
                    <Stars rate={aveRate}/>
                    <h2>₦{product.price}</h2>
                    <div>
                        <button 
                        type="button" 
                        onClick={() => ModelFunc({type: 'OPEN_MODEL'})}>Add to Cart</button>
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

// add(product._id, "addToCart")