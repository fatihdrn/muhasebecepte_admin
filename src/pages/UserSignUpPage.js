import React, { Component } from 'react';
import {signup} from '../api/apiCall';

export default class UserSignUpPage extends Component {
    state={
        id:null,
        username:null,
        password:null,
        pendingapicall:false
       
    }
    onChange=event=>{
        const {name,value}=event.target;
       
        this.setState(
            {
                [name]:value
            }
        )
    }
    onClickSignUp= async event=>{
event.preventDefault();
const body={
    id:this.state.id,
    username:this.state.username,
    password:this.state.password
};


try {
    const response =await signup(body);

} catch (error) {
    
}
this.setState({pendingapicall:false});
    }
    render() {
        return (
            <div className="container">
           <form>
               <h1>
                   Sign Up
               </h1>
               <div className="form-group"><label>id :</label><input className="form-control"  name="id"onChange={this.onChange}/></div>
               <div className="form-group"><label>User Name :</label> < input class="form-control" name="username"onChange={this.onChange}/></div>
               <div class="form-group"><label>Password :</label><input class="form-control"  name="password" onChange={this.onChange} type="password"/></div>
            
               <button className="btn btn-light" onClick={this.onClickSignUp} disabled={this.state.pendingapicall}>Sign Up</button>
               

           </form></div>
        )
    }
}
