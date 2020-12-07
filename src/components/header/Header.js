import React from 'react';
import {Link} from 'react-router-dom';

import RenderLogInBtn from './RenderLogInBtn'
import styles from './header.module.scss'
import Search from './Search';




const Header=()=>{

    return (
        <div className={styles.segment}>
            <div className={styles.leftMenu}>
                <RenderLogInBtn/>
            </div>
            <div className={styles.rightMenu}>
                <Search/>
                <Link to="/" className={styles.myShop}>
                    فروشگاه من    
                </Link>
            </div>
        </div>
    )
}



export default Header;