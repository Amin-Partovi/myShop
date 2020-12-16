import React from 'react';
import {Link} from 'react-router-dom';

import RenderLogInBtn from './RenderLogInBtn'
import styles from './header.module.scss'
import Search from './Search';




const Header=()=>{

    return (
        <div className={styles.segment}>
            <div className={styles.authMenu}>
                <RenderLogInBtn/>
            </div>
            <Search/>
            <Link to="/" className={styles.myShop}>
                فروشگاه من    
            </Link>
        </div>
    )
}



export default Header;