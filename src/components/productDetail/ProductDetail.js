import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchProduct} from '../../action'
import './productDetail.css'

const ProductDetail=(props)=>{
    const productId=props.match.params.id;
    useEffect(()=>{
        props.fetchProduct(productId)
    },[])

    if(props.product){
        return (
            <div className="detail">
                <div className="category">
                        {props.product.category}
                </div>
                <div className="picAndPrice">
                        <img className="productPic" src={props.product.image}/>
                    <div className="price">
                        {`${props.product.price}$`}
                    </div>
                </div>
                
                <div className="content">
                    <div className="prodTitle">
                        {props.product.title}
                    </div>
                    
                    <div className="description">
                        <p>{props.product.description}</p>
                    </div>
                        
                </div>
                <div className="ui right floated primary button purchase">
                    افزودن به سبد خرید 
                    <i className="right chevron icon"></i>
                </div>
            </div>
        )
    }
    else{
        return <div></div>
    }
    
}

const mapStateToProps=(state,ownProps)=>{
    const productId=ownProps.match.params.id;
    return{product:state.products[productId]}
}

export default connect(mapStateToProps,{fetchProduct})(ProductDetail);