import React from "react";
import { useQuery, useReactiveVar, useMutation } from '@apollo/client'
import { Link } from "react-router-dom";
import { Stars } from '../../../components'
import { Hero1 } from "../../index";
import {Image, Transformation} from 'cloudinary-react';
import Loader from '../../Loader/Loader'
import { ADD_TO_CART } from '../../../Apollo/operations/Mutations'
import {GET_USER} from '../../../Apollo/operations/Queries'
import { WishlistVar} from '../../../Apollo/reactiveVar/Variables'
import { setRating } from '../../../helpFunctions/functions'
import '../../Product/product.css'
import './Wishlist.css'

var token = localStorage.getItem('Token')

function Product({ product }){
    const [addToCart] = useMutation(ADD_TO_CART, {
        context: {
            headers: {
                authToken:  token
            }
        }
    })
    const aveRate = setRating(product?.rating)
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
                    <p><i class="fas fa-store"></i> {product?.vendor?.name}</p>
                    <Stars rate={aveRate}/>
                    <h2>${product.price}</h2>
                    <div>
                        <button 
                        type="button" 
                        style={{
                            backgroundColor: "#D00000",
                            width: "90%",
                        }}
                        onClick={() => addToCart({
                            variables: {
                                id: product._id
                            }
                        })}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Wishlist = () => {
    const wishlists = useReactiveVar(WishlistVar)
    
    const {loading, error } = useQuery(GET_USER,{
        context:{
            headers:{
                authToken:  token
            }
        },
        onCompleted: (data) => {
            WishlistVar(data.getUser.wishlists)
        }
    })
    console.log(wishlists)
    if(loading) return <Loader />
    return (
        <>  
            <Hero1/>
            <section className="wishlist">
                <div className="mile-label">
                    <div>Wishlist</div>
                </div>
                <div>
                    {
                        wishlists.map(item => (
                            <Product product={item} key={item._id}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default Wishlist;