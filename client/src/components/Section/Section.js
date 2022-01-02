import React, { useState } from "react";
import { ProductCard } from "..";
import images from "../../assets/images/images";
import './section.css'




const Section = ({title, products, toggle}) => {

  return (
    <div>
        <div className="mile-label">
            <p>{title}</p>
            <p>See all</p>
        </div>
        <div className="grid">
          {
            products.map(product => (
              <ProductCard 
              product={product}  
              key={product._id}
              toggle={toggle}/>
            ))
          }
        </div>
            {/* <ProductCard img={images.food2} logo={images.diamond} name='kilimagaro' rate={5} price={65.00} id={1}/>
            <ProductCard img={images.food1} logo={images.diamond} name='kilimagaro' rate={4.5} price={31.56} id={2}/>
            <ProductCard img={images.brandfood1} logo={images.diamond} name='kilimagaro' rate={3} price={20.05} id={3}/>
            <ProductCard img={images.food2} logo={images.diamond} name='kilimagaro' rate={1} price={60.00} id={4}/>
            <ProductCard img={images.food1} logo={images.diamond} name='kilimagaro' rate={4} price={75.40} id={5}/>
            <ProductCard img={images.brandfood1} logo={images.diamond} name='kilimagaro' rate={3.5} price={100.20} id={6}/> */}
    </div>
  );
};

export default Section;