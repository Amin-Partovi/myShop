import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {
    SUCCESS_REG,
    FAILED_REG
} from '../../constants/errorsAndAlerts'

import RegisterationForm from './RegisterationForm';
import {registeration,fetchAccounts} from '../../action';


const Registeration=(props)=>{
    useEffect(()=>{
        props.fetchAccounts()
    },[])

    const submit=(formValues)=>{
        let emails=[];
        for (let i=0;i<props.accounts.length;i++){
            emails.push(props.accounts[i].email)
        }
        let index=emails.indexOf(formValues.email);

        if(index==-1 ){
            props.registeration(formValues)
            alert(SUCCESS_REG)
        }
        else{
            alert(FAILED_REG)
        }
    }
    
    return(
        <div><RegisterationForm onSubmit={submit}/></div>
    )
}

const mapStateToProps=(state)=>{
    return{
    accounts:state.accounts}
}

export default connect(mapStateToProps,{registeration,fetchAccounts})(Registeration);