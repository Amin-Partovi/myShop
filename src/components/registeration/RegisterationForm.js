import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import validate from './validate';
import RenderField from './RenderField';
import styles from './registeration.module.scss';


const RegisterationForm=(props)=>{
    
    const submit=(formValues)=>{
        props.onSubmit(formValues);
    }

    return (
        <div className={styles.segment}>
            <h2 style={{textAlign:"center"}}>ثبت نام</h2>
            <form onSubmit={props.handleSubmit(submit)} className={styles.form}>
                <Field component={RenderField} type="input" label="نام" name="name"/>
                <Field component={RenderField} type="input" label="نام خانوادگی" name="lastName"/>
                <Field component={RenderField} type="email" label="ایمیل" name="email" />
                <Field component={RenderField} type="password" label="پسورد" name="password" />
                <Field component={RenderField} type="password" label="تکرار پسورد" name="repeatPass" />
                <button className={styles.redBtn} > ایجاد حساب کاربری</button>
                <div className={styles.auth} > قبلا ثبت نام کرده اید؟ <Link className={styles.logIn} to="/auth">ورود</Link></div>
            </form>
        </div>
    )
}

export default reduxForm({
    form:'registeration',
    validate
})(RegisterationForm);