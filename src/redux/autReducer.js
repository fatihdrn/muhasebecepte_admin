import * as constant from './constants';
const defautState={
    isLoggedin:false,
   username:undefined,
   password:undefined,
   id:undefined
}

const autReducer=(state={...defautState},action)=>{
if(action.type==constant.LOGOUT_SUCCESS){
return defautState;
}
else if(action.type==constant.LOGOIN_SUCCESS){
    return{
        ...action.payload,
        isLoggedin:true
    }
}
return state;
};


export default autReducer;