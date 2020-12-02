import RenderError from './RenderError';
import styles from './registeration.module.scss';

const RenderField=({label,input,type,meta})=>{
    let className=null;
    if (meta.error && meta.touched && type!="input"){
        className=styles.errorField;
    }
    else if(meta.error && meta.touched && type=="input"){
        className=styles.errorFieldFr;
    }
    else if(type!="input"){
        className=styles.field;
    }
    else if(type=="input"){
        className=styles.fieldFr;
    }


    return(
        <div className={className}>
            <label>{label}</label>
            <input {...input} type={type}/>
            <div>{RenderError(meta)}</div>
        </div>
    )
}

export default RenderField;