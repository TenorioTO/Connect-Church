import React from 'react';

import './banner.styles.scss';


const Banner = () => (
    <div className='banner-container'>
        {/* <img src='https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' 
            alt='banner' /> */}
        <div className='text-box'>
            <h2>Title</h2>
            <p>
                Some Message maybe something that I don't know.
            </p>
        </div>
    </div>
);

export default Banner;