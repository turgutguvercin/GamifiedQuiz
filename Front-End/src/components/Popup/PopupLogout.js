import React from "react";
import './PopupLogout.css';

function PopupLogout(props){
    
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">{props.children}</div>
        </div>  
        ): "";
    
}


export default PopupLogout;