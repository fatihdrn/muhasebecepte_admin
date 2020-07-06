import React, { Component } from 'react';

export const Authentication=React.createContext();

export default class AuthenticationContext extends Component {
    state={
        isLoggedin:false,
        username:undefined,
        password:undefined,
        id:undefined
    };
    onLoginSucces=authState=>{
      this.setState({
        ...authState,
        isLoggedin:true
      });
    };
    onLogoutSucces=()=>{
      this.setState({
        username:undefined,
        isLoggedin:false
      });
    }
    render() {
        return (
           <Authentication.Provider value={{
               state:{...this.state},
               onLoginSucces:this.onLoginSucces,
               onLogoutSucces:this.onLogoutSucces
           }}>
               {this.props.children}
           </Authentication.Provider>
        )
    }
}
