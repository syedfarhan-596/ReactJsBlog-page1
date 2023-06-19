import react from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
    return(
        <Router>
        <div class="footerContainer">
            <div id="aboutUs">
                <h1>About us?</h1>
                <h3>We provide you news up to date on time</h3>
            </div>
            <div id='contact'>
            <span><i class="bi bi-telephone-fill"></i> Call us</span>
            <span><i class="bi bi-instagram"></i>Instagram</span>
            <span><i class="bi bi-whatsapp"></i>WhatsApp</span>

            
            </div>
            <div id="copyright">
               <p> &copy;All legal rights recived </p>
            </div>
        </div>
        </Router>
    )
}
export default Footer;