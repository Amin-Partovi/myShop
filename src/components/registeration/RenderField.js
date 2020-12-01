import RenderError from './RenderError';

const RenderField=({label,input,type,meta})=>{
    const className=`field ${(meta.error && meta.touched)? "error":""}`;
    return(
        <div className={className} style={{textAlign:"right"}}>
            <label>{label}</label>
            <input {...input} type={type} style={{textAlign:"right"}}/>
            <div>{RenderError(meta)}</div>
        </div>
    )
}

export default RenderField;