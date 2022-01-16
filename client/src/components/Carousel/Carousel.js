import Product from '../Product/Product'
import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_PRODUCTS_CATEGORY } from '../../Apollo/operations/Queries'
import Slider from "react-slick";
import './carousel.css'
import settings from './config'

function CategoryCarousel({ categoryFunc }){
    const [active, setActive] = useState('all')
    const categories = [
        "all", "Cake",
        "Snack", "Drink",
        "Shawama", "Pizza",
        "Bread", "Bread",
        "Intercontinetal", "Bole",
        "Dishes"
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
                        <div className={`barges ${category === active && "active"}`} onClick={(e) => {
                            setActive(e.target.innerHTML)
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

function Carousel({products, title}){

    return(
        <>
            <div className="mile-label">
                <p> {title}</p>
            </div>
            <Slider {...settings} className="slide">
                {
                    products?.map(product => (
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