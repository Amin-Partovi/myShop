import {jsonServer} from '../apis/jsonServer';
import history from '../history';

export const registeration=(formValues)=>async dispatch=>{
    const response= await jsonServer.post("/myshop",formValues)
    dispatch({type:"REG_POST", payload:response.data})
    history.push("/auth")
}

export const fetchAccounts=()=>async dispatch=>{
    const response=await jsonServer.get("/myshop")
    dispatch({type:"FETCH_ACC", payload:response.data})
}

export const signIn=(name)=>{
    localStorage.setItem("isSignedIn",true)
    localStorage.setItem("name",name)
    return {type:"SIGN_IN", payload:name}
}

export const signOut=()=>{
    localStorage.clear();
    return {type:"SIGN_OUT"}
}