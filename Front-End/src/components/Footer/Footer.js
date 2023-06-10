import React from "react";
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
 return(
    <footer>
        <div>
            <p>Mydogstepsonabee.com</p>
        </div>
        <div id="useful-links">
            <h3>USEFUL LINKS</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Credits</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div>
            FOLLOW US
            <ul className="social">
                <li>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
 ); 
}

export default Footer;