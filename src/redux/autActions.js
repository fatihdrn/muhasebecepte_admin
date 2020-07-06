import * as constant from './constants';
import {login} from '../api/apiCall'

export const logoutSuccess=()=>{
    return {
        type:constant.LOGOUT_SUCCESS
    };
}
export const loginSucces=(autData)=>{
  return {
       type:constant.LOGOIN_SUCCESS,
       payload:autData
  };
}

export const loginHandler=(credens)=>{

 return async function(dispatch){

const response= await login(credens);
       
        const authState={
            ...response.data  
        };
        
        dispatch(loginSucces(authState));
      return response;
    };
};