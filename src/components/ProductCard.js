import React from 'react';
import {Link} from "react-router-dom";
import './productCard.css'

const ProductCard=(props)=>{

    return(
        <Link to={`/detail/${props.id}`} >
            <div className="productCards" style={{float:"left"}} key={props.id}>
                <div className="productCard">
                    <div className="productImage" >
                            <img src={props.imgSrc} />
                    </div>
                    <div className="productContent">
                        <div className="title">{props.header}</div>
                        <div className="description">
                            {props.price}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export default ProductCard;