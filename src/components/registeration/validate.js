import {
    PATTERN_EMAIL,
    PATTERN_PASS
} from '../../constants/patterns'

import {
    ERROR_NAME,
    ERROR_LASTNAME,
    ERROR_EMAIL,
    ERROR_INVALID_EMAIL,
    ERROR_PASS,
    ERROR_INVALID_PASS,
    ERROR_REPEAT_PASS,
    ERROR_INVALID_REPEAT_PASS
} from '../../constants/errorsAndAlerts'


const validate=(formValues)=>{
    const error={};
    if (!formValues.name){
        error.name=ERROR_NAME;
    }
    if (!formValues.lastName){
        error.lastName=ERROR_LASTNAME;
    }
    if(!formValues.email){
        error.email=ERROR_EMAIL;
    }
    else if (!PATTERN_EMAIL.test(formValues.email)) {
        error.email=ERROR_INVALID_EMAIL;
    }
    if (!formValues.password){
        error.password=ERROR_PASS;
    }
    else if(!PATTERN_PASS.test(formValues.password)){
        error.password=ERROR_INVALID_PASS;
    }
    if (!formValues.repeatPass){
        error.repeatPass=ERROR_REPEAT_PASS;
    }
    else if (formValues.repeatPass!==formValues.password){
        error.repeatPass=ERROR_INVALID_REPEAT_PASS;
    }   
    return error;
}

export default validate;