import { useQuery } from '@apollo/client'
import React from 'react';
import Loader from '../../Loader/Loader'
import { BrandSection, Hero1, Section } from "../../../components";
import {GET_PRODUCTS, GET_VENDORS} from '../../../Apollo/operations/Queries'
import {Carousel, BagdeCarousel, CategoryCarousel} from '../../Carousel/Carousel'
import { ToggleFunc } from '../../../Apollo/reactiveVar/Toggle';
import './Home.css'

const Home = () => {
    const {data, loading, error } = useQuery(GET_PRODUCTS)
    const {data: vendors, loading: loadVendors, error:  err } = useQuery(GET_VENDORS)
    const products = data?.getProducts
    const vendor = vendors?.getVendors
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
        <BagdeCarousel />
        <BrandSection vendors={ vendor }/>
        <CategoryCarousel />
        <section className="section">
            <Section title="Hot Deals" products={products} link="all"/>
        </section>
        <Carousel products={products} name="Hot Deals"/>
        <Carousel products={products} name="Exculcive Deals"/>
        <Carousel products={products} name="Exculcive Deals"/>
    </>
  );
};

export default Home;