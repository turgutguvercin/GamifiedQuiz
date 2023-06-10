import React, { useState } from 'react';
import axios from "axios";
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import PopupLogout from '../../components/Popup/PopupLogout';
import '../../components/Popup/PopupLogout.css';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faUserPlus} from '@fortawesome/free-solid-svg-icons';

function Navbar(props){
  let navigate = useNavigate();
  const [buttonPopup,setButtonPopup]= useState(false);

  function handleClick() {
    setButtonPopup(true);
    axios.get(`http://localhost/logoutProcess.php`,{withCredentials: true})
      .then((result) =>{
        console.log(result);
        sessionStorage.clear();
      })
      .catch(error => {
        console.error('Error during logout: ', error);
      });

    setTimeout(function() {
      navigate("/");
      window.location.reload(true)
    }, 3000);
  }

  return(
    <div className='sticky'>
      <nav>
          <div className='nav-area-1'>
              <ul>
                <li> <img src={logo} alt='logo'/> <a href='./'>my dog step on a bee...</a></li>
              </ul>
              
          </div>
        <div className='nav-area-2'>
        <ul>
              <li className={props.signup}><a href='./login'>Log in</a></li>
              <li className={props.login}><a href='./signup'>Sign up <FontAwesomeIcon icon={faUserPlus} /></a></li>
              <li className={props.email}><a href='#'>{props.user} </a></li>
              <li className={props.dashboard}><a href='./dashboard'>My Dashboard</a></li>
              <li className={props.contactus}><a href='./contactus'>Contact us</a></li>
              <li className={props.logout}><a onClick={handleClick} href='#'>Logout</a></li>

          </ul>
          </div>
      </nav>
      <PopupLogout trigger={buttonPopup}>
                You successfully log out! You are redirecting to Main Page...
      </PopupLogout>
    </div>
  );
}

export default Navbar;