import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import ProductCard from './ProductCard';
import {fetchProducts} from '../../action';


const Products= (props)=>{

    useEffect(()=>{
        props.fetchProducts();
    },[])
    
    return (
        props.products.map((product)=>{
            return (
                <ProductCard header={product.title}
                imgSrc={product.image}
                price={`${product.price}$`}
                description={product.description}
                category={product.category}
                id={product.id}
                key={product.id}/>
            )
        })
    )
            
}

const mapStateToProps=(state)=>{
    return {products:Object.values(state.products)}
}

export default connect(mapStateToProps,{fetchProducts})(Products);