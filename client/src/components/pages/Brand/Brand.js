import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import Loader from '../../Loader/Loader'
import { GET_VENDOR, GET_PRODUCTS_CATEGORY } from '../../../Apollo/operations/Queries'
import {Image} from 'cloudinary-react';
import {Carousel, CategoryCarousel} from '../../Carousel/Carousel'
import { Header, Hero1, Section } from "../../../components";
import './Brand.css'

const Brand = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const {data, loading, error} = useQuery(GET_VENDOR,{
        variables: {
            vendorId: id
        },
        onCompleted: (data) => {
            return setProducts(data.getVendor.products)
        }
    })
    const [categoryFunc] = useLazyQuery(GET_PRODUCTS_CATEGORY,{
        onCompleted: (data) => {
            let newProducts = data.getProductsCategory.filter(product => {
                return product.vendorId === id
            })
            return setProducts(newProducts)
        }
    })
    console.log(data?.getVendor)
    const vendor = data?.getVendor

    // const [follow] = useMutation()
    // if(loading)return <Loader />
    return (
        <>
            <Hero1 />
            <section className="section">
                <div className="brand-info">
                    <div>
                        <Image cloudName="agbofrank" publicId={vendor?.logo} secure="true"></Image>
                        <div>
                            <h5>{vendor?.name}</h5>
                            <p>{vendor?.address}</p>
                            <button>{vendor?.followers.length} followers</button>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
                <CategoryCarousel categoryFunc={categoryFunc}/>
                <Section title="Hot Deals" products={products}/>
                <Section title="Exclusively New" products={products}/>
            </section>
        </>
    );
};

export default Brand;