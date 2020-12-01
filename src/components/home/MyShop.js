import React, { useEffect, useState } from 'react';

import ProductCard from './ProductCard';


const MyShop= ()=>{

    const [prodInfo,setProdInfo]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProdInfo(json))
    },[])
    
    return (prodInfo.map((product)=>{
        return (
            <ProductCard header={product.title}
            imgSrc={product.image}
            price={`${product.price}$`}
            description={product.description}
            category={product.category}
            id={product.id}
            key={product.id}/>
        )
    }))
            
}

export default MyShop;