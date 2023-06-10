import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PopupLogout from '../../components/Popup/PopupLogout.js';


function QuizTimer() {

    const [seconds, setSeconds] = useState(30)
    const [minutes, setMinutes] = useState(2)
    const [popup, setPopup] = useState(false);
    const [singleDigit, setSingleDigit] = useState(false);
    let navigate = useNavigate();
  
  
    function updateTime() {
      if (minutes === 0 && seconds === 0) {
        setPopup(true);
        setTimeout(function() {
          navigate("../dashboard");
        }, 3000);
      }
      else {
        if (seconds === 0) {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        } 
        else {
          setSeconds(seconds => seconds - 1);
        }
      }
      if(0<seconds &&  seconds< 11)
        setSingleDigit(true);
      else
        setSingleDigit(false);
    }
  
  
  
    useEffect(() => {
      const token = setTimeout(updateTime, 1000)
  
      return function cleanUp() {
        clearTimeout(token);
      }
    })
  
  
  
  
    return(singleDigit) ? (<p>
      Time: {minutes}:0{seconds}
      <PopupLogout trigger={popup} > Times Up! </PopupLogout> 
    </p>) : (<p>Time: {minutes}:{seconds}<PopupLogout trigger={popup} > Times Up! </PopupLogout> </p>);
  }


export default QuizTimer;