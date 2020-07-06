import React, { Component } from 'react';
import tb from '../assets/lg.png';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import {Authentication} from '../shared/AuthenticationContext';
import {logoutSuccess} from '../redux/autActions';

class Tabbar extends Component {
  
  
   
    render() {

       console.log(this.props);

                      const{isLoggedin,username,onLogoutSucces}=this.props;
                       
                        
                        let links=(
                            <ul className="navbar-nav ml-auto">
                            <li><Link className="navbar-link" to="/login">
                                Giriş</Link></li>
                            <li><Link className="navbar-link" to="/signup">Kayıt Ol</Link></li>
                        </ul>
                          );
                           if(isLoggedin){
                               links=( <ul className="navbar-nav ml-auto">
                                   <li><Link className="navbar-link" to={`/user/${username}`}>{username}</Link></li>
                               <li className="navbar-link" onClick={onLogoutSucces} style={{cursor:'pointer',color:'red'}}>
                                   Çıkış</li>
                               
                           </ul>);
                           }
                    
                            return (
                                <div className="container bg-dark mb-4">
                                   <nav className="navbar navbar-dark bg-dark">
                                  <Link className="navbar-brand" to="/">
                                      <img src={tb} width="60"/> Muhasebe Cepte</Link>
                                     {links}
                                    </nav>
                    
                                </div>
                            )
                    }
                    
}
const mapStateToProps=(store)=>{
 return {
     isLoggedin:store.isLoggedin,
     username:store.username
 }
}
const mapDispatchToProps=(dispatch)=>{
return {
    onLogoutSucces:()=>{
       return  dispatch(logoutSuccess());
    }
}
}

export default connect(mapStateToProps ,mapDispatchToProps)(Tabbar);