import React from 'react';
import {Link} from "react-router-dom";

import styles from './productCard.module.scss';

const ProductCard=(props)=>{

    return(
        <Link to={`/detail/${props.id}`} >
            <div className={styles.productCards} key={props.id}>
                <div className={styles.productCard}>
                    <div className={styles.productImage} >
                            <img src={props.imgSrc} />
                    </div>
                    <div className={styles.productContent}>
                        <div className={styles.title}>{props.header}</div>
                        <div className={styles.description}>
                            {props.price}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export default ProductCard;