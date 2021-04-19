import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Service" , link: "/emergency"},
        {name: "Mobile Change" , link: "/checkup"},
        {name: "Service of old Fashion car" , link: "/personal-treatment"},
        {name: "Cable" , link: "/tooth-extract"},
        {name: "Mobile Change" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Badda, Dhaka " , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Service" , link: "/emergency"},
        {name: "Mobile Change" , link: "/checkup"},
        {name: "Service of old Fashion car" , link: "/personal-treatment"},
        {name: "Cable" , link: "/tooth-extract"},
        {name: "Mobile Change" , link: "/checkup"},
        {name: "Mobile Change" , link: "/checkup"},
        {name: "Mobile Change" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Service" , link: "/emergency"},
        {name: "Mobile Change" , link: "/checkup"},
        {name: "Service of old Fashion car" , link: "/personal-treatment"},
        {name: "Cable" , link: "/tooth-extract"},
        {name: "Mobile Change" , link: "/checkup"},
        {name: "Mobile Change" , link: "/checkup"},
        {name: "Mobile Change" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><Link to="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>
                            <li className="list-inline-item"><Link to="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></Link></li>
                            <li className="list-inline-item"><Link to="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></Link></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;