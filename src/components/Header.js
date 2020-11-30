import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from './action';

import './header.css'



const Header=(props)=>{

    const renderButton=()=>{
        if(props.isSignedIn){
            return (
                <div className="ui item leftMenu">
                    {props.name} خوش آمدی
                    <div className="exit" onClick={()=>props.signOut()}> خروج </div>
                </div>
            )
        }
        else{
            return (
                <Link to="/auth" className="ui item">
                    <div className="enterance">
                        ورود یا ثبت نام
                        <i className="user outline icon"/>
                    </div>
                </Link>
            )
        }
    }
    return (
        <div className="ui raised segment">
            <div className="ui secondary menu rightMenu">
                {renderButton()}
                <div className="right menu">
                    <Link to="/" className="ui item">
                        <span className="myShop">
                            فروشگاه من    
                        </span>

                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn,
        name:state.auth.name}
}

export default connect(mapStateToProps,{signOut})(Header);