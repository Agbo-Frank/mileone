import React from "react";
import { ProductCard } from "..";
import './section.css'
import { Link } from 'react-router-dom'
import { Carousel } from "../Carousel/Carousel";




const Section = ({title, products, link}) => {

  return (
    <div>
        <div className="mile-label">
            <p>{title}</p>
            <Link to={`/products/${link}`}>See all</Link>
        </div>
        <div className="grid">
          {
            products?.map(product => (
              <ProductCard 
              product={product}  
              key={product._id}/>
            )).slice(0, 8)
          }
        </div>
        <Carousel products={products}/>
    </div>
  );
};

export default Section;