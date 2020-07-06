
import React, { Component } from 'react';
import { users } from '../api/apiCall';
import { connect } from 'react-redux';
import {token} from '../api/apiCall';

class HomePage extends Component {
  onClickHaber = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/Haber');


    } catch (error
    ) {

    }


  }
  onClickMakale = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/Makale');

      let a="ExponentPushToken[M81s0wO6RN3dg3XYVyKoKP]";
      a=a.replace("ExponentPushToken","");
      a=a.replace("[","");
      a=a.replace("]","");
      token(a);


      console.log(a);
    } catch (error
    ) {

    }


  }
  onClickHaberList = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/HaberList');


    } catch (error
    ) {

    }
  }
  onClickMakaleList = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/MakaleList');


    } catch (error
    ) {

    }


  }
  onClickKitap = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/Kitap');


    } catch (error
    ) {

    }


  }

  onClickKitapList = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/KitapList');


    } catch (error) {

    }


  }

  onClickVergi = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/Vergi');


    } catch (error
    ) {

    }


  }

  onClickVergiList = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/VergiList');


    } catch (error) {

    }


  }

  onClickBildirim = async event => {
    event.preventDefault();

    try {
      console.log(this.props);
      const { history } = this.props;
      const { push } = history;
      push('/Bildirim');


    } catch (error
    ) {

    }


  }



  render() {
    const { isLoggedin } = this.props;
    console.log(this.props);
    return (

      <div className="container">
        
       
        <div className="card" style={{height:180}}>
        <div className="card-body">
          <h3 className="card-title">Makale</h3>
          <p className="card-text">Makale eklemek için "Makale Ekle"   |   Makale silmek ve listelemek için "Makale Listesi" butonuna tıklayınız. </p>
          <button className="btn btn-success btn-lg"  onClick={this.onClickMakale} disabled={!isLoggedin}>Makale Ekle</button>{'      '}
          <button className="btn btn-primary btn-lg" onClick={this.onClickMakaleList} disabled={!isLoggedin}>Makale Listesi</button>
        </div>
        </div>
        
        <div className="card" style={{height:180}}>
        <div className="card-body">
          <h3 className="card-title">Haber</h3>
          <p className="card-text">Haber eklemek için "Haber Ekle"   |   Haber silmek ve listelemek için "Haber Listesi" butonuna tıklayınız. </p>
          <button className="btn btn-success btn-lg"  onClick={this.onClickHaber} disabled={!isLoggedin}>Haber Ekle</button>{'      '}
          <button className="btn btn-primary btn-lg" onClick={this.onClickHaberList} disabled={!isLoggedin}>Haber Listesi</button>
        </div>
        </div>

        <div className="card" style={{height:180}}>
        <div className="card-body">
          <h3 className="card-title">Kitap</h3>
          <p className="card-text">Kitap eklemek için "Haber Ekle"   |   Kitap silmek ve listelemek için "Kitap Listesi" butonuna tıklayınız. </p>
          <button className="btn btn-success btn-lg"  onClick={this.onClickKitap} disabled={!isLoggedin}>Kitap Ekle</button>{'      '}
          <button className="btn btn-primary btn-lg" onClick={this.onClickKitapList} disabled={!isLoggedin}>Kitap Listesi</button>
        </div>
        </div>
   
        <div className="card" style={{height:180}}>
        <div className="card-body">
          <h3 className="card-title">Vergi</h3>
          <p className="card-text">Vergi eklemek için "Vergi Ekle"   |   Vergi silmek ve listelemek için "Vergi Listesi" butonuna tıklayınız. </p>
          <button className="btn btn-success btn-lg"  onClick={this.onClickVergi} disabled={!isLoggedin}>Vergi Ekle</button>{'      '}
          <button className="btn btn-primary btn-lg" onClick={this.onClickVergiList} disabled={!isLoggedin}>Vergi Listesi</button>
        </div>
        </div>
        
        <div className="card" style={{height:180}}>
        <div className="card-body">
          <h3 className="card-title">Bildirim</h3>
          <p className="card-text">Vergi eklemek için "Vergi Ekle"   |   Vergi silmek ve listelemek için "Vergi Listesi" butonuna tıklayınız. </p>
          <button className="btn btn-success btn-lg"  onClick={this.onClickBildirim} disabled={!isLoggedin}>Bildirim Gönder</button>
        </div>
        </div>
        
        
      
      </div>

     
     
      
       

       
      
    );
  }
};

const ms = (store) => {
  return {
    isLoggedin: store.isLoggedin
  }
}

export default connect(ms)(HomePage);


