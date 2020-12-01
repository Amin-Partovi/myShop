import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import validate from './validate';
import RenderField from './RenderField';


const RegisterationForm=(props)=>{
    
    const submit=(formValues)=>{
        props.onSubmit(formValues);
    }

    return (
        <div className="ui compact segment" style={{margin:"auto", top:"20px", width:"30%"}}>
            <h2 style={{textAlign:"center"}}>ثبت نام</h2>
            <form onSubmit={props.handleSubmit(submit)} className="ui form error">
                <Field component={RenderField} label="نام" name="name"/>
                <Field component={RenderField} label="نام خانوادگی" name="lastName"/>
                <Field component={RenderField} type="email" label="ایمیل" name="email" />
                <Field component={RenderField} type="password" label="پسورد" name="password" />
                <Field component={RenderField} type="password" label="تکرار پسورد" name="repeatPass" />
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