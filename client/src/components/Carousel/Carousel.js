// import OwlCarousel from 'react-owl-carousel';
import Product from '../Product/Product'
import Slider from "react-slick";
import './carousel.css'
import settings from './config'


function Carousel({products, toggle}){
    return(
        <>
            <div className="mile-label">
                <p> Brands</p>
            </div>
            <Slider {...settings} className="slide">
                {
                    products.map(product => (
                        <div key={product._id}>
                            <Product product={product} toggle={toggle}/>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default Carousel