import {
    SIGN_IN,
    SIGN_OUT
} from '../constants/types';
const INITIAL_STATE={
    isSignedIn:localStorage.getItem("isSignedIn"),
    name:localStorage.getItem("name")
}

const auth=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SIGN_IN:
            return {...state, isSignedIn:true, name:action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn:false}
        default:
            return state
    }
}

export default auth;