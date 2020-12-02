import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchProduct} from '../../action'
import styles from './productDetail.module.scss'

const ProductDetail=(props)=>{
    const productId=props.match.params.id;
    useEffect(()=>{
        props.fetchProduct(productId)
    },[])

    if(props.product){
        return (
            <div className={styles.detail}>
                <div className={styles.category}>
                        {props.product.category}
                </div>
                <div className={styles.picAndPrice}>
                    <img className={styles.productPic} src={props.product.image}/>
                    <div className={styles.price}>
                        {`${props.product.price}$`}
                    </div>
                </div>
                
                <div className={styles.content}>
                    <div className={styles.prodTitle}>
                        {props.product.title}
                    </div>
                    
                    <div className={styles.description}>
                        <p>{props.product.description}</p>
                    </div>
                        
                </div>
                <div className={styles.addToBasket}>
                    <div className={styles.addToBasketBtn}>
                        افزودن به سبد خرید 
                        <i className="right chevron icon"></i>
                    </div>
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