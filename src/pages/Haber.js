import React, { Component } from 'react';
import {deleteMevzuat,haberGonder,mevzuats} from '../api/apiCall';

export default class Haber extends Component {
state={
   
    baslik:null,
    paragraf:null,
    image:null,
    date:null,
    isSend:null,
    isSend1:null
   
}
componentDidMount(){
    mevzuats().then(response=>{
        this.setState({
          mevzuats:response.data
        });
    })
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
            baslik:this.state.baslik,
            paragraf:this.state.paragraf,
            image:this.state.image,
            date:this.state.date
        };
        console.log(body);
        
        try {
            const response =await haberGonder(body);
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
                <h3>Haber</h3>

                <div className="form-group">
                    <label>Başlık</label>
                    <input type="text" className="form-control" name="baslik" onChange={this.onchange}/>
                </div>

                <div className="form-group">
                <label>Paragraf</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="paragraf"rows="5" onChange={this.onchange}></textarea>
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
