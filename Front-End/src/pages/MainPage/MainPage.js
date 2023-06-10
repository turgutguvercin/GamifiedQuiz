import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import AppMain from '../AppMain/AppMain';
import '../../App.css';

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
function MainPage() {
  
  // create the navbar 
  const [state, setState] = useState({
    email:'hide',
    logout:'hide',
    login: '',
    signup: '',
    dashboard:'hide'
  });

  useEffect(() => {
    axios.get('http://localhost/session.php', { withCredentials: true })
      .then(response => {
        console.log(response.data);
        if(response.data.UserID === "unauthorised")
        {
          setState(prevState => ({
            ...prevState,
            email: 'hide',
            logout: 'hide'
          }));
        }
        else {
          setState({
            email: response.data.Email,
            logout: '',
            login: 'hide',
            signup: 'hide',
            dashboard: ''
          });
        }
      });
  }, []);

  return (
    <div>
      <Navbar user={state.email} email={state.email} logout={state.logout} 
              login={state.login} signup={state.signup} dashboard={state.dashboard} />
      <AppMain/>
    </div>
  );
}

export default MainPage;
