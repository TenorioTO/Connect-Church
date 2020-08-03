import React from 'react';

// img import
import cntMission from '../../assets/img/mission_show.jpeg';
import cntDescomplicando from '../../assets/img/descomplicando.jpeg';
import cntStockport from '../../assets/img/podcast.jpg';



import './slide.styles.scss';

const Slide = () => (
    <div className="slide-container">
        <h2>CONNECT PODCAST</h2>
        <div className="slide-show">
            <a href="https://cntmission.com/podcast_connect.php" target="_blank">
                <img src={cntStockport} alt="connect" />
            </a>
            <a href="https://cntmission.com/podcast_en.php" target="_blank">
                <img src={cntMission} alt="connect" />
            </a>
            <a href="https://cntmission.com/podcast_pt.php" target="_blank">
                <img src={cntDescomplicando} alt="connect" />
            </a>
        </div>
    </div>
   
    
);

export default Slide;