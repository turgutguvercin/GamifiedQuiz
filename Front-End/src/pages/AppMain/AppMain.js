import React from 'react';
import './AppMain.css';
import mobileapps from '../../assets/images/mobileapps.png'
import storeslogo from '../../assets/images/storeslogo.png'
import Footer from "../../components/Footer/Footer";

const MemoizedFooter = React.memo(Footer);

function AppMain() {
    return(
        <>
             <div className="main">
                <div className="main-title">
                    <div className="main-title-inner">
                        <h1>Get knowledge about dogs' behaviours in a fun way.</h1>
                    </div>
                </div>                
             </div>
             <div className="applications">
                 <div>
                     <h3>Learn Uninterrupted.</h3>
                     <br/>
                     <p>Make your breaks and commutes more productive with our iPhone and Android apps. Download them and see why Apple and Google gave us their highest accolades.</p>
                     <br/>
                     <img id="storeslogo" src={storeslogo} alt="App store logos"/>
                 </div>
                 <div>
                    <img src={mobileapps} alt="Mobile applications"/>
                 </div>                
             </div>
             <MemoizedFooter/>
        </>
    )
}

export default AppMain;
