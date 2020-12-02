import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {signOut} from '../../action';
import styles from './header.module.scss'

const RenderLogInBtn=(props)=>{
    if(props.isSignedIn){
        return (
            <div className={styles.wellcome}>
                <div className={styles.exit} onClick={()=>props.signOut()}> خروج </div>
                {props.name} خوش آمدی
            </div>
        )
    }
    else{
        return (
            <Link to="/auth" className={styles.logIn}>
                    <span className={styles.enterance}>ورود یا ثبت نام</span>
                    <i className="user circle icon"/>
            </Link>
        )
    }
}

const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn,
        name:state.auth.name}
}

export default connect(mapStateToProps,{signOut})(RenderLogInBtn);