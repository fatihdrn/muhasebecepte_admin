import React, { Component } from 'react';
import {deleteMakale,haberGonder,makaleler} from '../api/apiCall';

export default class MakaleList extends Component {
   
    state={
       
        _isMounted :false,
        mevzuats:[],
        deleted:false
    }
    componentDidMount(){
        makaleler().then(response=>{
           
            this.setState({
              mevzuats:response.data
            });
        })
    }
    
    
    
    
        deleteMakaleler= async id =>{
                    console.log(id);
                    deleteMakale(id);
                    this.setState({mevzuats:[]});
                    makaleler().then(response=>{
                        this.setState({
                          mevzuats:response.data
                        });
                    })
                    window.location.reload(true);
                };
            
        render() {
            
            
            return (
                <div className="container">
               
               
          
              <div className="card">
                  <h3 className="card-header text-center">
                 Makale Listesi
                  </h3>
               <div className="list-group-flush">
              {
                  this.state.mevzuats.map(mevzuat=>{
                    return(
                 
                        <div className="list-group-item list-group-item-action justify-content-between " key={mevzuat.id}>
                             
                             <div className="form-row">
                             <div className="col"> <label style={{color:'red'}}>{mevzuat.id}</label> </div>
                             <div className="col"> <label>{mevzuat.baslik}</label> </div>
                             <div className="col"> <label>{mevzuat.date}</label> </div>
                             <div className="col"> <button type="danger" style={{width:100,heigth:2000}} className="btn btn-danger btn-block" onClick={()=>this.deleteMakaleler(mevzuat.id)}>SİL</button></div>
                             </div>
                          
                           </div>);
                  })
              }
               </div>
              </div>
                
                </div>
                
            )
        }

}
