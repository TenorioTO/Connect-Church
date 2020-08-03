import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <div className="footer-contacts">
            <h4 className='footer-title'>
                FOLLOW US
            </h4>
            
            <div className="icon-footer-list">
                <a href="https://www.facebook.com/connectstockport" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                </a>
                <a href="https://www.instagram.com/connectstockport/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'instagram-square']} />
                </a>
                <a href="https://www.youtube.com/channel/UCRqsB94piFQSg6M67-6P_4w" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'youtube-square']} />
                </a>
            </div>
        </div>

        <div className="footer-email">
            <span>Connect Mission: </span>
            <div className="links-footer">
                
                <a href='https://cntmission.com/' target="_blank">www.cntmission.com</a>
            </div>
        </div>  

        <div className="footer-menu">
                <Link to='/us' className='links' >Us</Link>
                {/* <Link to='/news' className='links' >News</Link>
                <Link to='/agenda' className='links' >Agenda</Link> */}
        </div>

        
    </div>
);

export default Footer;
