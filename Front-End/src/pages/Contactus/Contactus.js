import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import mobileapps from '../../assets/images/mobileapps.png'
import storeslogo from '../../assets/images/storeslogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
function Contactus() {
    
return(
    
    <div>
        <Navbar  login={"hide"}  signup={"hide"} dashboard={"hide"} logout={"hide"} contactus={"hide"}/>
             <div className="main">
                <div className="main-title">
                    <div className="main-title-inner">
                    <h1>CONTACT</h1>
                    <br/>
                    <h2><FontAwesomeIcon icon={faEnvelope}/> info@mystepdogonbee.com</h2>
                    <br/>
                    <h2><FontAwesomeIcon icon={faPhone}/> +44 7878785522</h2>
                    </div>
                </div>
                
             </div>
             <div className="applications">
                 <div>
                     <h3>Learn Uninterrupted.</h3>
                    <br/>
                    <p>Make your breaks and commutes more productive with our iPhone and Android apps. Download them and see why Apple and Google gave us their highest accolades.</p>
                    <br/>
                    <img id="storeslogo" src={storeslogo} alt=" "/>
                </div>
                <div>
                    <img src={mobileapps} alt=" "/>
                </div>
                
            </div>

            <Footer/>

        </div>
)
}

export default Contactus;