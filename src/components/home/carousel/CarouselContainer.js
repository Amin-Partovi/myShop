import React from 'react';
import {connect} from 'react-redux';

import ControlledCarousel from './Carousel';
import styles from './CarouselContainer.module.scss';


const CarouselContainer=(props)=>{

    if(props.images[8] && props.images[13]){
        return (
            <div className={styles.container}>
                <div className={styles.categories}>
                    <div className={styles.jewelery}>
                        <div>
                            <img src={props.images[8].image}/>
                            <span className={styles.category}>جواهرات</span>
                        </div>
                    </div>
                    <div className={styles.electronics}>
                        <div>
                            <img src={props.images[13].image}/>
                            <span className={styles.category}>لوازم الکترونیک</span>
                        </div>
                    </div>
                </div>
                <div className={styles.swipper}>
                    <ControlledCarousel/>
                </div>
            </div>
        )
    }
    else{
        return <div></div>
    }
    
}
const mapStateToProps=(state)=>{
    return {images:state.products}
}

export default connect(mapStateToProps)(CarouselContainer);