import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

const LogInForm=(props)=>{

    const renderedField=({label,input,type})=>{
        return(
            <div className="field" style={{textAlign:"right"}}>
                <label>{label}</label>
                <input {...input} type={type}/>
            </div>
        )
    }
    
    const onSubmit=(formValues)=>{
        props.onSubmit(formValues)
    }

    return (
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div className="ui compact segment" style={{ margin:"100px auto"}}>
                <h2 style={{textAlign:"center"}}>ورود</h2>
                <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error" style={{textAlign:"right"}}>
                    <Field component={renderedField} className="field" type="email" label="ایمیل خود را وارد کنید" name="email"/>
                    <Field component={renderedField} className="field" type="password" label="پسورد خود را وارد کنید" name="password"/>
                    <button className="ui red button" style={{display:"block", padding:"10px 40px",margin:"10px auto"}}>ورود</button>
                    <p>با ورود و یا ثبت نام در سایت شما شرایط و قوانین استفاده از سرویس های سایت و قوانین حریم خصوصی آن را می‌پذیرید</p>
                </form>
                <Link className="ui button" to="/registeration" style={{display:"block", padding:"10px 40px",margin:"10px auto"}}>ثبت نام</Link>
            </div>
        </div>
    )
}

export default reduxForm({
    form:"LogIn"
})(LogInForm)