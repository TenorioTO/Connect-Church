import React from 'react';

import hello from '../../assets/img/hello.jpeg';

import './us.styles.scss';

const UsPage = () => (
    <div className='about-page'>
        <div className='about-title'>
            <h1>Who we are!!</h1>
            <hr />
        </div>
        <div className="about-text">
            <img src={hello} alt="connect"/>
            <p>
                We are a joyful multicultural community. 
                Life can be amazing, and that is not because we won’t have problems or struggles, 
                but because we can have friendship with the prince of peace – JESUS.
                We meet in two places, but we are one church. We have one service totally in English, 
                and one in the Portuguese language and more are on the way.
            </p>
        </div>

    </div>
)

export default UsPage;