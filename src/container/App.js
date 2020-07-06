import React from 'react';
import Login from '../pages/Login';
import SignUp from '../pages/UserSignUpPage'

import ApiProgres from '../shared/ApiProgres';
import Homepage from '../pages/Homepage';
import UserPage from '../pages/UserPage';
import HaberList from '../pages/HaberList';
import MakaleList from '../pages/MakaleList';
import Makale from '../pages/Makale';
import Haber from '../pages/Haber';
import Kitap from '../pages/Kitap';
import Bildirim from '../pages/Bildirim';
import Vergi from '../pages/Vergi';
import KitapList from '../pages/KitapList';
import VergiList from '../pages/VergiList';
import {HashRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import Tabbar from '../components/Tabbar';
import {connect} from 'react-redux';



class App extends React.Component {
  
  render(){
    const {isLoggedin}=this.props;
    console.log(isLoggedin);
    return (
      <div className="row">
        <Router>
          <Tabbar />
        <Switch>
        <Route exact path="/" component={Homepage}/>
       {!isLoggedin&& (<Route path="/login" component={Login}/>)}
        <Route path="/Signup" component={SignUp}/>
        <Route path="/Makale" component={Makale}/>
        <Route path="/Haber" component={Haber}/>
        <Route path="/HaberList" component={HaberList}/>
        <Route path="/MakaleList" component={MakaleList}/>
        <Route path="/Kitap" component={Kitap}/>
        <Route path="/KitapList" component={KitapList}/>
        <Route path="/Vergi" component={Vergi}/>
        <Route path="/VergiList" component={VergiList}/>
        <Route path="/Bildirim" component={Bildirim}/>
        <Route path="/user/:username" component={UserPage}/>
        <Redirect to="/"/>
        </Switch>
        </Router>
      </div>
      
    );
  }
  
}
const mapStateToProps=(store)=>{

return {
  isLoggedin:store.isLoggedin
}
}

export default connect(mapStateToProps)(App);
