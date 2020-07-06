import {createStore,applyMiddleware,compose } from 'redux';
import autReducer from './autReducer';
import Securels from 'secure-ls';
import thunk from 'redux-thunk';


const secureLs=new Securels();

const getstatefromstorage=()=>{
    const aut=secureLs.get('us-aut');
    let stateinls={
        isLoggedin:false,
        username:undefined,
        password:undefined,
        id:undefined
    };
    
    if(aut){
        return aut;
      
    }
    return stateinls;
}
const updateStateInSto=newState=>{
    secureLs.set('us-aut',newState);
 
}

const configureStore=()=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const store= createStore(autReducer,getstatefromstorage(),composeEnhancers(applyMiddleware(thunk)));
    store.subscribe(()=>{
        updateStateInSto(store.getState());
    });
    return store;
}

export default configureStore;