import { Link } from "react-router-dom";
import Slider from "react-slick";
import {Image, Transformation} from 'cloudinary-react';
import './brand.css'
import settings from '../Carousel/config'

function BrandComponent({vendor}){
    return(
        <div className="brand-card">
            <Image cloudName="agbofrank" publicId={vendor?.products[0].image} secure="true">
                <Transformation width="270" height="240" crop="fill" gravity="center" />
            </Image>
            <Link to={`/brand/${vendor._id}`} className="brand-card-info">
                <div>
                    <Image cloudName="agbofrank" publicId={vendor?.logo} secure="true"></Image>
                </div>
                <div>
                    <p>{vendor.name}</p>
                    <p><i class="fas fa-map-marker-alt"></i> Artillery</p>
                    <p>{
                        vendor?.products.map(product => {
                            return `${product.name}, `
                        }).slice(0, 5)
                    }</p>
                </div>
            </Link>
        </div>
    )
}

function Brand({ vendors }){
    return(
        <>
            <div className="mile-label">
                <p> Brands</p>
                <p>See all</p>
            </div>
            <div>
                <Slider {...settings} className="slide">
                    {
                        vendors?.map(vendor => (
                            <div key={vendor._id}>
                                <BrandComponent vendor={vendor} key={vendor._id}/>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </>
    )
}

export default Brand
// {
//     vendors?.map(vendor => (
//         <BrandComponent vendor={vendor} key={vendor._id}/>
//     ))
// }