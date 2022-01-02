import images from "../../../assets/images/images";
import { useParams } from "react-router-dom"
import { useState }from 'react'
import { useQuery } from "@apollo/client";
import LoginPop from '../../LoginPop/LoginPop'
import { GET_PRODUCT } from "../../../Apollo/operations/Queries";
import { Header, Section, Stars } from "../../../components";
import {Image, Transformation} from 'cloudinary-react';
import { useMutation } from '@apollo/client'
import { ADD_TO_CART, WISHLIST, FOLLOW } from "../../../Apollo/operations/Mutations";
import { setRating, countRate, Rate, Comment } from "../../../helpFunctions/functions";
import './Product.css'


const Product = () => {
    const { id } = useParams()
    const [toggled, setToggled] = useState(false)
    const {data, loading, error} = useQuery(GET_PRODUCT,{
        variables: {
            itemId: String(id)
        }
    })
    const product = data?.getProduct
    const aveRate = setRating(product?.rating)
    
    const token = localStorage.getItem('Token')

    const configuration = {
        context:{
            headers:{
                authToken: token 
            }
        },
        onCompleted: (data) => {
            console.log(data)
        },
        onError: (err) => {
            if(err){
                console.log(err)
                setToggled(true)
            }
        }
    }
    

    const [addToCart] = useMutation(ADD_TO_CART, { ...configuration })
    const [wishlist] = useMutation(WISHLIST, { ...configuration })
    const [follow, {loading: following}] = useMutation(FOLLOW, { ...configuration })


    function add(id, type){
        if(!token){
            setToggled(true)
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
    if(loading)return(
        <div>Loading....</div>
    )
    console.log(data)
    return (
        <>  
            <Header />
            <LoginPop toggle={[toggled, setToggled]}/>
            <section className="section">
                <div className="product-image">
                    <img src={images.photo} />
                    <div className="brand-info">
                        <div>
                            <Image cloudName="agbofrank" publicId={product?.vendor?.logo} secure="true"></Image>
                            <div>
                                <h5>{product?.vendor?.name}</h5>
                                <p>{product?.vendor?.address}</p>
                                <button className="_btn">{product?.vendor?.followers.length} followers</button>
                            </div>
                        </div>
                        <div>
                            <button className="btn" onClick={() => follow({
                                variables:{
                                    id: product?.vendor?._id
                                }
                            })}>{following ? 'following...':'follow'}</button>
                        </div>
                    </div>
                    <div className="text-content">
                        <h4>{product?.name}</h4>
                        <p>
                            Maple Leaf Cake is a mixture of Lorem lorem ispum lotat lorem lorem Maple Leaf Cake is a mixture of Lor
                            em lorem ispum lotat lorem lorem Maple Leaf Cake is a mixture of Lorem lorem ispum lotat lorem lorem
                            Maple Leaf Cake is a mixture of Lor em lorem ispum lotat lorem lorem Leaf Cake is a mixture of Lor em
                            lorem ispum lotat lorem lorem 
                        </p>
                    </div>
                    <div>
                        <div className="feedback_label">
                            <div>Customer Feedback</div>
                            <div>See all</div>
                        </div>
                        <div className="customer_feedback_content">
                            <div>
                                <p>Product Ratings</p> 
                                <div className="rating-box">
                                    <h1>{aveRate}</h1>
                                    <Stars rate={aveRate}/>
                                </div>    
                                <ul className="rate">
                                    <Rate rate={5} num={countRate(product?.rating, 5)} totalNum={product?.rating.length}/>
                                    <Rate rate={4} num={countRate(product?.rating, 4)} totalNum={product?.rating.length}/>
                                    <Rate rate={3} num={countRate(product?.rating, 3)} totalNum={product?.rating.length}/>
                                    <Rate rate={2} num={countRate(product?.rating, 2)} totalNum={product?.rating.length}/>
                                    <Rate rate={1} num={countRate(product?.rating, 1)} totalNum={product?.rating.length}/>
                                </ul>
                            </div>
                            <div className="comments">
                                <h4>Comments</h4>
                                <div>
                                    {
                                        product?.comments !== 0 ? product?.comments.map((comment, index) => (
                                            <Comment comment={comment} key={index}/>
                                        )):<div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            margin: "40px auto",
                                            color: "black"
                                        }}>
                                            <i className="fas fa-exclamation"></i>
                                            <p>No comment Yet!</p>
                                        </div>
                                    }
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <Image cloudName="agbofrank" publicId={product?.image} secure="true">
                        <Transformation background="#E9F3FD" />
                        <Transformation width="270" height="240" crop="fill" gravity="center" />
                        <Transformation radius="80" />
                    </Image>
                    <div>
                        <h2>${product?.price}</h2>
                       <Stars rate={aveRate}/>
                        <div>
                            <button 
                            type="button" 
                            className="mile-addcart"
                            onClick={() => add(product?._id, "addToCart")}>Add to Cart</button>
                            <button 
                            type="button" className="mile-wishlist"
                            onClick={() => add(product?._id, "wishlist")}>Wishlist</button>
                        </div>
                    </div>
                </div>
                {/* <Section title="What Others Bought"/>
                <Section title="Special Offers"/> */}
            </section>
        </>
    );
};

export default Product;