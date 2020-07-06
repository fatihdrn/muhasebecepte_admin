import React, { Component } from 'react';
import {deleteKitap,haberGonder,mevzuats, kitaplar} from '../api/apiCall';

export default class HaberList extends Component {
    _isMounted = false;
state={
   
   
    mevzuats:[],
    deleted:false
}
componentDidMount(){
    kitaplar().then(response=>{
        this._isMounted = true;
        if (this._isMounted) {
        this.setState({
          mevzuats:response.data
        });}
    })
}
componentWillUnmount() {
    this._isMounted = false;
  }



    deleteKitap= async id =>{
                console.log(id);
                deleteKitap(id);
                kitaplar().then(response=>{
                    this.setState({
                      mevzuats:response.data
                    });
                });
                window.location.reload(true);
            };
        
    render() {
        
        
        return (
            <div className="container">
           
           
      
          <div className="card">
              <h3 className="card-header text-center">
             Kitap Listesi
              </h3>
           <div className="list-group-flush">
          {
              this.state.mevzuats.map(mevzuat=>{
                 return(
                 
                    
                 
                        <div className="list-group-item list-group-item-action justify-content-between " key={mevzuat.id}>
                             
                             <div className="form-row">
                             <div className="col"> <label style={{color:'blue'}}>{mevzuat.ad}</label> </div>
                             <div className="col"> <label style={{color:'green'}}>{mevzuat.yazar}</label> </div>
                             <div className="col"> <button type="danger" style={{width:100,heigth:2000}} className="btn btn-danger btn-block" onClick={()=>this.deleteKitap(mevzuat.id)}>SİL</button></div>
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
