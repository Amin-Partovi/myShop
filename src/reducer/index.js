import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import accounts from './accounts';
import auth from './auth';

export const reducer=combineReducers({
    form:formReducer,
    accounts:accounts,
    auth:auth

})

