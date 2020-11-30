import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import LogInForm from './LogInForm';
import {fetchAccounts,signIn} from './action';
import history from '../history';




const LogIn=(props)=>{

    useEffect(()=>{
        props.fetchAccounts()
    },[])

    const onSubmit=(formValues)=>{
        let emails=[];
        for (let i=0;i<props.accounts.length;i++){
                emails.push(props.accounts[i].email)
        }
        let index=emails.indexOf(formValues.email);

        if(index!==-1 && props.accounts[index].password==formValues.password){
            props.signIn(props.accounts[index].name);
            history.push("/");
            
        }
        else{
            alert("ایمیل یا پسورد اشتباه می باشد")
        }




    }

    return(
        <div>
            <LogInForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
    accounts:state.accounts.undefined}
}
export default connect(mapStateToProps,{fetchAccounts,signIn})(LogIn);