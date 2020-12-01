import React,{useState,useEffect} from 'react';

import './productDetail.css'

const ProductDetail=(props)=>{
    const productId=props.match.params.id;
    const [prodInfo,setProdInfo]=useState(null);


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProdInfo(json))
    },[])

    if(prodInfo){
        return (
            <div className="detail">
                <div className="category">
                        {prodInfo.category}
                </div>
                <div className="picAndPrice">
                        <img className="productPic" src={prodInfo.image}/>
                    <div className="price">
                        {`${prodInfo.price}$`}
                    </div>
                </div>
                
                <div className="content">
                    <div className="prodTitle">
                        {prodInfo.title}
                    </div>
                    
                    <div className="description">
                        <p>{prodInfo.description}</p>
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

export default ProductDetail;