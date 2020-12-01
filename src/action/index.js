import axios from 'axios';

import {jsonServer} from '../apis/jsonServer';
import history from '../history';
import {REG_POST,
    FETCH_ACC,
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    SIGN_IN,
    SIGN_OUT
} from '../constants/types';

export const registeration=(formValues)=>async dispatch=>{
    const response= await jsonServer.post("/accounts",formValues)
    dispatch({type:REG_POST, payload:response.data})
    history.push("/auth")
}

export const fetchAccounts=()=>async dispatch=>{
    const response=await jsonServer.get("/accounts")
    dispatch({type:FETCH_ACC, payload:response.data})
}

export const fetchProducts=()=>async dispatch=>{
    const response= await axios.get('https://fakestoreapi.com/products')
    dispatch({type:FETCH_PRODUCTS, payload:response.data})
}

export const fetchProduct=(id)=>async dispatch=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch({type:FETCH_PRODUCT, payload:response.data})
}

export const signIn=(name)=>{
    localStorage.setItem("isSignedIn",true)
    localStorage.setItem("name",name)
    return {type:SIGN_IN, payload:name}
}

export const signOut=()=>{
    localStorage.clear();
    return {type:SIGN_OUT}
}