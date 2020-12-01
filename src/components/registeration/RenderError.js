const RenderError=({touched,error})=>{
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

export default RenderError;