import React,{useEffect} from 'react';
import {connect} from 'react-redux';

import RegisterationForm from './RegisterationForm';
import {registeration,fetchAccounts} from './action';


const Registeration=(props)=>{
    useEffect(()=>{
        props.fetchAccounts()
    },[])

    const submit=(formValues)=>{
        let emails=[];
        for (let i=0;i<props.accounts.length;i++){
            emails.push(props.accounts[i].email)
        }
        console.log(emails)
        let index=emails.indexOf(formValues.email);

        if(index==-1 ){
            props.registeration(formValues)
            alert("ثبت نام با موفقیت انجام شد")
        }
        else{
            alert("این ایمیل پیش از این ثبت شده است")
        }

    }
    
    return(
        <div><RegisterationForm onSubmit={submit}/></div>
    )
}

const mapStateToProps=(state)=>{
    return{
    accounts:state.accounts.undefined}
}

export default connect(mapStateToProps,{registeration,fetchAccounts})(Registeration);