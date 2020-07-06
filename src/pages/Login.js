import React, { Component } from 'react';
import {login} from '../api/apiCall';
import axios from 'axios';
import buttonWP from '../components/ButtonWithProgress';

import {connect} from 'react-redux';
import {loginSucces, loginHandler} from '../redux/autActions';
//import {Authentication} from '../shared/AuthenticationContext';

 class Login extends Component {
 //static contextType=Authentication;
    state={
     username:null,
     password:null,
     error:null
    }
  

   onChange=event=>{
       const{name,value}=event.target;
       this.setState({
           [name]:value,
           error:null
       });
   }
   onClickLogin= async event=>{
       event.preventDefault();
       const{username,password}=this.state;
       const {history,dispatch}=this.props;
       const {push}=history;
       const creds={
           username,
           password,
        

       };
      
       this.setState({
           error:null
       });
       try {
          await dispatch(loginHandler(creds));
        push('/');
       /*const response= await login(creds);
        
        const authState={
            ...response.data
            
           
            
        }
        
        dispatch(loginSucces(authState));*/
        
       } catch (apierror) {
           this.setState({
error:"Kullanıcı Bulunamadı"
           })
       }
      
       
   }

    render() {
        console.log(this.props);
        const buttonEnabled=this.state.username&&this.state.password;
        const {pendingapicall}=this.props;
        return (
            <div className="container center bg-light">
            <form >
           <h1 className="text-center">Login</h1>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" onChange={this.onChange}></input>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.onChange}></input>
                   {this.state.error&& <div className="alert alert-danger" role="alert">
        {this.state.error}
</div>}
                </div>
                <div className="text-center">
                <button type="submit" onClick={this.onClickLogin} disabled={!buttonEnabled ||pendingapicall} className="btn btn-primary">Login</button>  
                </div>
               
            
            </form></div>
        )
    }
}


export default connect()(Login);