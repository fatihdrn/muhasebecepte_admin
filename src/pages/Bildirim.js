import React, { Component } from 'react';
import { tokenlist,token, mevzuats } from '../api/apiCall';

export default class Bildirim extends Component {
    state = {

        baslik: null,
        metin:null,
        isSend: null,
        isSend1: null,
        tokenListesi:[],
        ekran:null,
        bil_id:0

    }
    componentDidMount() {
        
    }

    onchange = event => {
        const { name, value } = event.target;

        this.setState(
            {
                [name]: value
            }
        )
    }
    sendPushNotification = async (ps) => {
        const message = {
          to: ps,
          sound: 'default',
          title: this.state.baslik,
          body: this.state.metin,
          data: { data: this.state.ekran,bid:this.state.bil_id },
          _displayInForeground: true,
        };
        const response = await fetch('https://exp.host/--/api/v2/push/send', {
            mode: 'no-cors',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
        });
      };
      onClickHepsi = async event => {
        event.preventDefault();
     
        try {
        
            tokenlist(1).then(response=>{
                console.log(response.data[0].token);
                this.sendPushNotification(response.data[0].token);

                response.data.map((aa)=>{
                        this.sendPushNotification(aa.token);
                });
                this.setState({
                  tokenListesi:response.data
                 
                });

              
            });
            this.setState({ isSend: 'asda' });
            this.setState({ isSend1: null });

        } catch (error) {
            this.setState({ isSend1: 'asda' });
            this.setState({ isSend: null });

        }

    }
    onClickTacir = async event => {
        event.preventDefault();
     
        try {
        
            tokenlist(0).then(response=>{
                console.log(response.data[0].token);
                this.sendPushNotification(response.data[0].token);

                response.data.map((aa)=>{
                        this.sendPushNotification(aa.token);
                });
                this.setState({
                  tokenListesi:response.data
                 
                });

              
            });
            this.setState({ isSend: 'asda' });
            this.setState({ isSend1: null });

        } catch (error) {
            this.setState({ isSend1: 'asda' });
            this.setState({ isSend: null });

        }

    }
    onClickMuhasebe = async event => {
        event.preventDefault();
        
      

        try {
           
            tokenlist(2).then(response=>{
                console.log(response.data[0].token);
                this.sendPushNotification(response.data[0].token);

                response.data.map((aa)=>{
                        this.sendPushNotification(aa.token);
                });
                this.setState({
                  tokenListesi:response.data
                 
                });

              
            });
            
            this.setState({ isSend: 'asda' });
            this.setState({ isSend1: null });
            

        } catch (error) {
            this.setState({ isSend1: 'asda' });
            this.setState({ isSend: null });

        }

    }
    cancelCourse = () => {
        document.getElementById("create-course-form").reset();
        this.setState({ isSend: null, isSend1: null })
    }


    render() {


        return (
            <div className="container mb-2 bg-light text-dark">




                <form id="create-course-form" >
                    <h3>Bildirim</h3>

                    <div className="form-group">
                        <label>Başlık</label>
                        <input type="text" className="form-control" name="baslik" onChange={this.onchange} />
                    </div>
                    <div className="form-group">
                        <label>Metin</label>
                        <input type="text" className="form-control" name="metin" onChange={this.onchange} />
                    </div>
                    <div className="form-group">
                        <label>Makale veya Haber id:</label>
                        <input type="text" className="form-control" name="bil_id" onChange={this.onchange} />
                    </div>
                    <div className="form-group">
                    <label>
          Bildirim Ekranı:
          <select className="form-control" name="ekran" value={this.state.ekran} onChange={this.onchange}>
            <option value="Details">Haber</option>
            <option value="DetailMakale">Makale</option>
            <option value="Vergi">Vergi Takvimi</option>
            <option value="Hesap">Hesaplamalar</option>
            <option value="Kitap">Kitap</option>
            <option value="Iletisim">İletisim</option>
          </select>
        </label>
        </div>
                    <div className="form-row">
                    <div className="col">
                            <button type="submit" style={{ width: 120, heigth: 2000 }} className="btn btn-success " onClick={this.onClickHepsi}>Herkese Gönder</button>
                        </div>

                        <div className="col">
                            <button type="submit" style={{ width: 120, heigth: 2000 }} className="btn btn-success " onClick={this.onClickTacir}>Tacire Gönder</button>
                        </div>
                        <div className="col">
                            <button type="submit" style={{ width: 120, heigth: 2000 }} className="btn btn-success " onClick={this.onClickMuhasebe}>Muhasebeciye Gönder</button>
                        </div>

                        <div className="col">
                            <button type="submit" style={{ width: 100, heigth: 2000 }} className="btn btn-danger btn-lg" onClick={this.cancelCourse}>Temizle</button>
                        </div>

                    </div>

                    {this.state.isSend && <div className="alert alert-success" >
        Gönderim Başarılı
</div>}   {this.state.isSend1 && <div className="alert alert-danger" >
                      Gönderim Başarısız   Başarısız
</div>}

                </form>




            </div>




        )
    }
}
