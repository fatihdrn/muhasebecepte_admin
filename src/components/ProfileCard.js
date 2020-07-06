import React, { Component } from 'react'
import  {withRouter} from 'react-router-dom';
//import {Authentication} from '../shared/AuthenticationContext';
import {connect} from 'react-redux';
  const ProfileCard=(props)=>{
      
      
                const pathUsername=props.username1;
                return (
              <div>
                  {pathUsername}
              </div>
          ); 
            
    

    
};

const mapStateToProps=store=>{
  return{
    username1:store.username
  }};
export default connect(mapStateToProps)(withRouter(ProfileCard));

