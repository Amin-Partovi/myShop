import React from 'react';

import SwipperContainer from './swipper/SwipperContainer';
import Products from './products/Products';
import styles from './products/productCard.module.scss'

const Home=()=>{
    return(
        <React.Fragment>
            <SwipperContainer/>
            <div className={styles.container}><Products/></div>
        </React.Fragment>
    )
}

export default Home;