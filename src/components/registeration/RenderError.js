import styles from './registeration.module.scss';

const RenderError=({touched,error})=>{
    if (touched && error){
        return (
            <div className={styles.error}>
                {error}
            </div>

        )
    }
}

export default RenderError;