import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';


const validate=(formValues)=>{
    const error={};
    const emailPattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const passPattern=/^(.{0,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{4,})|(.{1,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{3,})|(.{2,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{2,})|(.{3,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{1,})|(.{4,}(([a-zA-Z][^a-zA-Z])|([^a-zA-Z][a-zA-Z])).{0,})$/;
    if (!formValues.name){
        error.name="لطفا نام خود را وارد نمایید"
    }
    if (!formValues.lastName){
        error.lastName="لطفا نام خانوادگی خود را وارد نمایید"
    }
    if(!formValues.email){
        error.email="ایمیل خود را وارد نمایید"
    }
    else if (!emailPattern.test(formValues.email)) {
        error.email="ایمیل نامعتبر است"
    }
    if (!formValues.password){
        error.password="لطفا پسورد خود را وارد نمایید"
    }
    else if(!passPattern.test(formValues.password)){
        error.password="پسورد باید حداقل شامل 6 کاراکتر، 1 حرف و 1 کاراکتر غیر از حروف باشد."
    }
    if (!formValues.repeatPass){
        error.repeatPass="لطفا تکرار پسورد را وارد نمایید"
    }
    else if (formValues.repeatPass!==formValues.password){
        error.repeatPass="تکرار پسورد اشتباه می باشد"
    }   
    return error;
        
}

const RegisterationForm=(props)=>{
    
    const renderedError=({touched,error})=>{
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    const renderedField=({label,input,type,meta})=>{
        const className=`field ${(meta.error && meta.touched)? "error":""}`;
        return(
            <div className={className} style={{textAlign:"right"}}>
                <label>{label}</label>
                <input {...input} type={type} style={{textAlign:"right"}}/>
                <div>{renderedError(meta)}</div>
            </div>
        )
    }
    const submit=(formValues)=>{
        props.onSubmit(formValues);
    }

    return (
        <div className="ui compact segment" style={{margin:"auto", top:"20px", width:"30%"}}>
            <h2 style={{textAlign:"center"}}>ثبت نام</h2>
            <form onSubmit={props.handleSubmit(submit)} className="ui form error">
                <Field component={renderedField} label="نام" name="name"/>
                <Field component={renderedField} label="نام خانوادگی" name="lastName"/>
                <Field component={renderedField} type="email" label="ایمیل" name="email" />
                <Field component={renderedField} type="password" label="پسورد" name="password" />
                <Field component={renderedField} type="password" label="تکرار پسورد" name="repeatPass" />
                <button className="ui red button" style={{display:"block", margin:"10px auto"}}> ایجاد حساب کاربری</button>
                <div className="filed" style={{textAlign:"right"}}> قبلا ثبت نام کرده اید؟ <Link to="/auth">ورود</Link></div>
            </form>
        </div>
    )
}

export default reduxForm({
    form:'registeration',
    validate
})(RegisterationForm);