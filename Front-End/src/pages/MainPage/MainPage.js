import React from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import AppMain from '../AppMain/AppMain';
import '../../App.css';

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
class MainPage extends React.Component {

 // create the navbar 
constructor() {
  super();
  this.state = {
    email:'hide',
    logout:'hide',
    dashboard:"hide"
    
  }
}

componentDidMount(){
  axios.get('http://localhost/session.php',{withCredentials: true})
  .then(response => {
    console.log(response.data);
    if(response.data.UserID === "unauthorised")
    {
      this.setState ({
        email:'hide',
        logout:'hide'
      })
    }
    else{
      this.setState({
        email:response.data.Email,
        logout:'',
        login:'hide',
        signup:'hide',
        dashboard:''

     })
    }

  })
}

render(){
  return (
    <div >
      <Navbar user={this.state.email} email={this.state.email}  logout={this.state.logout}
       login={this.state.login} signup={this.state.signup} dashboard={this.state.dashboard} />
      <AppMain/>
      </div>
  );
}
}
export default MainPage;
