import { useQuery, useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import React from 'react';
import Loader from '../../Loader/Loader'
import { BrandSection, Hero1, Section } from "../../../components";
import {GET_PRODUCTS, GET_VENDORS, GET_PRODUCTS_CATEGORY} from '../../../Apollo/operations/Queries'
import {Carousel, CategoryCarousel} from '../../Carousel/Carousel'
import { ToggleFunc } from '../../../Apollo/reactiveVar/Toggle';
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])
    const {data, loading, error } = useQuery(GET_PRODUCTS,{
        onCompleted: (data) => {
          console.log(data)
          return setProducts(data.getProducts)
      }
    })
    const {data: vendors, loading: loadVendors, error:  err } = useQuery(GET_VENDORS)
    const vendor = vendors?.getVendors
    const [categoryFunc] = useLazyQuery(GET_PRODUCTS_CATEGORY,{
      onCompleted: (data) => {
          console.log(data)
          return setProducts(data.getProductsCategory)
      }
  })
  if(loading){
    return <Loader />
  }
  return (
    <>
        <Hero1 />
        <div className="search-control home-search">
            <input 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            onFocus={() => ToggleFunc({type: 'OPEN_SEARCH_PAGE'})}/>
            <i className="fas fa-search"></i>
        </div>
        <section className="section">
            <BrandSection vendors={ vendor }/>
            <CategoryCarousel categoryFunc={categoryFunc}/>
            <Section title="Hot Deals" products={products} link="all"/>
            <Section title="Hot Deals" products={products} link="all"/>
        </section>
    </>
  );
};

export default Home;