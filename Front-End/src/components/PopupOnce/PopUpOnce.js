import React, { useEffect } from "react";
import { useState} from "react";
import PopupLogout from "../Popup/PopupLogout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

function PopupOnce(props){
    // when the user passes a level show the popup.
    
    const[popup, setPopup] = useState(false);
    useEffect(() => {
        // when level changes this useEffect will executed.
    const saved = localStorage.getItem(props.user);  // compare the previous value from browser's local storage   
    if(saved == `${props.level}`-1)
    {
        setPopup(true);
    }    
        
    localStorage.setItem(props.user, props.level); // save the user and user's level to browser's local storage 
},[props.level]);

const exit =() =>{
    setPopup(false);
}
return(
<PopupLogout trigger={popup}> 
<FontAwesomeIcon icon={faXmark}  id="out-logo" style={{marginLeft:"37em"}} onClick={exit}/>  
<br/>
<div>
Congrats! You unlocked the level {props.level} 
</div>
<br/>

</PopupLogout>);
}

export default PopupOnce;