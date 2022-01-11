import Product from '../Product/Product'
import Slider from "react-slick";
import './carousel.css'
import settings from './config'


function Carousel({products, name}){
    return(
        <>
            <div className="mile-label">
                <p> {name}</p>
            </div>
            <Slider {...settings} className="slide">
                {
                    products.map(product => (
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
                centerPadding: "80px",
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

function CategoryCarousel(){
    const locations = [
        "all", "Cakes",
        "Snack", "Drinks", "Shawama",
        "Pizza", "Bread", "Intercontinetal",
        "Bole", "African", "Fries"
,    ]
    const setting1 = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        rows: 2,
        responsive: [
            {
              breakpoint: 349,
              settings: {
                slidesToShow: 2,
                rows: 1,
                centerPadding: "70px",
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