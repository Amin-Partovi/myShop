import React from 'react';

import CarouselContainer from './carousel/CarouselContainer';
import Products from './products/Products';
import styles from './products/productCard.module.scss'

const Home=()=>{
    return(
        <React.Fragment>
            <CarouselContainer/>
            <div className={styles.container}><Products/></div>
        </React.Fragment>
    )
}

export default Home;