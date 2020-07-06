import React, { Component } from 'react';
import {vergiGonder} from '../api/apiCall';

export default class Vergi extends Component {
state={
   
    ad:null,
    date:null,
   
  
    isSend:null,
    isSend1:null
   
}
componentDidMount(){
  
}

onchange=event=>{
    const {name,value}=event.target;
       
    this.setState(
        {
            [name]:value
        }
    )
        }

    onChangeFile=event=>{
        const file=event.target.files[0];
        const fileReader=new FileReader();
        fileReader.onloadend=()=>{
            this.setState({image:fileReader.result});
        }
        fileReader.readAsDataURL(file);
    }
  

    onClickGonder= async event=>{
        event.preventDefault();
        let yil=this.state.date.slice(0,4);
        let ay=this.state.date.slice(5,7);
        let gun=this.state.date.slice(8,10);

        let a=gun+'-'+ay+'-'+yil;
        console.log(a);
        const body={
            ad:this.state.ad,
            date:a
        };
        console.log(body);
        
        try {
            const response =await vergiGonder(body);
            this.setState({isSend:'asda'});
            this.setState({isSend1:null});
            
        
        } catch (error) {
            this.setState({isSend1:'asda'});
            this.setState({isSend:null});

        }
       
            }
            cancelCourse = () => { 
                document.getElementById("create-course-form").reset();
                this.setState({isSend:null,isSend1:null})
              }
  
        
    render() {
        
        
        return (
            <div className="container mb-2 bg-light text-dark">
            <form id="create-course-form" >
                <h3>Vergi</h3>

                <div className="form-group row">
                    <label>Vergi Adı</label>
                    <input type="text" className="form-control" name="ad" onChange={this.onchange}/>
                </div>
                

                
                <div className="form-group row">
                <label for="example-date-input" className="col-2 col-form-label">Vergi Bitis Tarihi</label> 
                <div className="col-10">
                  <input className="form-control" type="date"  name="date"   onChange={this.onchange} />
                </div>
                  </div>
                 
                
                     
                
               <div className="form-row">

                   <div className="col">
                   <button type="submit" style={{width:100,heigth:2000}} className="btn btn-success btn-lg" onClick={this.onClickGonder}>Gönder</button>
                   </div>
                   <div className="col">
                   <button type="submit" style={{width:100,heigth:2000}} className="btn btn-danger btn-lg" onClick={this.cancelCourse}>Temizle</button>
                   </div>
                  
               </div>
                
                {this.state.isSend&&<div className="alert alert-success" >
  Kayıt Başarılı
</div>}   {this.state.isSend1&&<div className="alert alert-danger" >
  Kayıt Başarısız
</div>}

            </form>
            
           
         
            
            </div>
            
        )
    }
}
