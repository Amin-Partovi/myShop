import {
    FETCH_ACC
} from '../constants/types';

const accounts=(state=null,action)=>{
    switch(action.type){
        case FETCH_ACC:
            return action.payload
        default:
            return state
    }
}

export default accounts;