import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import styles from './login.module.scss';

const LogInForm=(props)=>{

    const renderedField=({label,input,type})=>{
        return(
            <div className={styles.field}>
                <label>{label}</label>
                <input {...input} type={type}/>
            </div>
        )
    }
    
    const onSubmit=(formValues)=>{
        props.onSubmit(formValues)
    }

    return (
        <div className={styles.container}>
            <div className={styles.segment}>
                <h2>ورود</h2>
                <form onSubmit={props.handleSubmit(onSubmit)} className={styles.form}>
                    <Field component={renderedField} type="email" label="ایمیل خود را وارد کنید" name="email"/>
                    <Field component={renderedField} type="password" label="پسورد خود را وارد کنید" name="password"/>
                    <button className={styles.redBtn} >ورود</button>
                    <div className={styles.rules}>
                        <p>با ورود و یا ثبت نام در سایت شما شرایط و قوانین استفاده از سرویس های سایت و</p>
                        <p> قوانین حریم خصوصی آن را می‌پذیرید</p>
                    </div>
                </form>
                <Link className={styles.btn} to="/registeration" >ثبت نام</Link>
            </div>
        </div>
    )
}

export default reduxForm({
    form:"LogIn"
})(LogInForm)