import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

import './footer.styles.scss';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <div className='footer'>
        <div className="footer-contacts">
            <h4 className='footer-title'>
                FOLLOW US
            </h4>
            
            <div className="icon-footer-list">
                <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                <FontAwesomeIcon icon={['fab', 'instagram-square']} />
                <FontAwesomeIcon icon={['fab', 'youtube-square']} />
            </div>
        </div>

        <div className="footer-email">
            <div className="links-footer">
                <span>Email: </span>
                <a href='/'>info@cntchurch.co.uk</a>
            </div>
        </div>

        <div className="footer-tithes">
            <h4 className='footer-title'>
                TITHES AND OFFERINGS
            </h4>
            
            <div className="icon-footer-list">
                <FontAwesomeIcon icon={faMoneyBill} />
                
            </div>

        </div>

        <div className="footer-menu">
                <Link to='/us' className='links' >Us</Link>
                <Link to='/news' className='links' >News</Link>
                <Link to='/agenda' className='links' >Agenda</Link>
        </div>

        
    </div>
);

export default Footer;
