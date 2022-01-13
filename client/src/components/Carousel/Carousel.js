import Product from '../Product/Product'
import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_PRODUCTS_CATEGORY } from '../../Apollo/operations/Queries'
import { useSearchParams, Link } from 'react-router-dom'
import Slider from "react-slick";
import './carousel.css'
import settings from './config'

function CategoryCarousel({ categoryFunc }){
    const categories = [
        "all", "Cake",
        "Snack", "Drink", "Shawama",
        "Pizza", "Bread", "Intercontinetal",
        "Bole", "African", "Dishes"
,    ]
    const setting1 = {
        className: "center",
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 4,
        swipeToSlide: true,
        rows: 2,
        responsive: [
            {
              breakpoint: 349,
              settings: {
                slidesToShow: 2,
                rows: 1,
                centerPadding: "40px",
                centerMode: true,
                infinite: true,
              }
            },
        ]
    }
    
    return(
        <Slider {...setting1} className="slide1">
            {
                categories.map((category, i) => (
                    <div key={i}>
                        <div className="barges" onClick={(e) => {
                            console.log(e.target.classList.contains('active'))
                            if(e.target.classList.contains('active')){
                                e.target.classList.remove('active')
                            }
                            else{
                                e.target.classList.add('active')
                            }
                            console.log(e.target.classList.contains('active'))
                            categoryFunc({
                                variables: {
                                    category
                                }})
                            }}>{category}</div>
                    </div>
                ))
            }
        </Slider>
    )
}

function Carousel({products, name, show}){
    const [Components_product, setComponents_product] = useState(products)

    const [categoryFunc] = useLazyQuery(GET_PRODUCTS_CATEGORY,{
        onCompleted: (data) => {
            console.log(data)
            return setComponents_product(data.getProductsCategory)
        }
    })

    return(
        <>
            <CategoryCarousel categoryFunc={categoryFunc}/>
            <div className="mile-label">
                <p> {name}</p>
            </div>
            <Slider {...settings} className={`slide ${show}`}>
                {
                    Components_product?.map(product => (
                        <div key={product._id}>
                            <Product product={product}/>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}
function BagdeCarousel(){
    const locations = [
        "all", "Location", "Aluu",
        "choba", "uniport", "Rumosi",
        "nkpolu"
    ]
    const setting1 = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        rows: 1,
        responsive: [
            {
              breakpoint: 369,
              settings: {
                slidesToShow: 2,
                rows: 1,
                centerPadding: "50px",
                centerMode: true,
                infinite: true,
              }
            },
        ]
    }
    
    return(
        <Slider {...setting1} className="slide1">
            {
                locations.map((loc, i) => (
                    <div key={i}>
                        <div className="barges">{loc}</div>
                    </div>
                ))
            }
        </Slider>
    )
}

export {
    Carousel,
    BagdeCarousel,
    CategoryCarousel
}