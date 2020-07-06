import React, { Component } from 'react';
import {deleteMevzuat,kitapGonder,mevzuats} from '../api/apiCall';

export default class Kitap extends Component {
state={
   
    yazar:null,
    ad:null,
    image:null,
    link:null,
    fiyat:null,
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
        const body={
            yazar:this.state.yazar,
            ad:this.state.ad,
            image:this.state.image,
            link:this.state.link,
            fiyat:this.state.fiyat
        };
        console.log(body);
        
        try {
            const response =await kitapGonder(body);
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
                <h3>Kitap</h3>

                <div className="form-group">
                    <label>Ad</label>
                    <input type="text" className="form-control" name="ad" onChange={this.onchange}/>
                </div>
                <div className="form-group">
                    <label>Yazar</label>
                    <input type="text" className="form-control" name="yazar" onChange={this.onchange}/>
                </div>
                <div className="form-group">
                    <label>Fiyat</label>
                    <input type="text" className="form-control" name="fiyat" onChange={this.onchange}/>
                </div>
                <div className="form-group">
                    <label>Satın Alma Link</label>
                    <input type="text" className="form-control" name="link" onChange={this.onchange}/>
                </div>

                
                <div className="form-group">
                <label>Fotoğraf</label>
                <img style={{width:280,height:180}} src={this.state.image} />
                <input type="file"className="form-control" name="image" onChange={this.onChangeFile}/>
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
