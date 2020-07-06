import React, { Component } from 'react';
import {deleteVergi,vergiler,mevzuats} from '../api/apiCall';

export default class HaberList extends Component {
    _isMounted = false;
state={
   
   
    mevzuats:[],
    deleted:false
}
componentDidMount(){
    vergiler().then(response=>{
        this._isMounted = true;
        if (this._isMounted) {
        this.setState({
          mevzuats:response.data
        });}
    })
}
reverseString(str) {
    let splitString = str.split("-"); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join("-"); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

componentWillUnmount() {
    this._isMounted = false;
  }



    deleteMevzuat= async id =>{
                console.log(id);
                deleteVergi(id);
                vergiler().then(response=>{
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
             Vergi Listesi
              </h3>
           <div className="list-group-flush">
          {
              this.state.mevzuats.map(mevzuat=>{
                 return(
                 
                 <div className="list-group-item list-group-item-action justify-content-between " key={mevzuat.id}>
                      
                      <div className="form-row">
                      <div className="col"> <label>{mevzuat.ad}</label> </div>
                      <div className="col"> <label>{this.reverseString( mevzuat.date)}</label> </div>
                      <div className="col"> <button type="danger" style={{width:100,heigth:2000}} className="btn btn-danger btn-block" onClick={()=>this.deleteMevzuat(mevzuat.id)}>SİL</button></div>
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
