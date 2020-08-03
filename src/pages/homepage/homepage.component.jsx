import React from 'react';
import Banner from '../../components/banner/banner.component';
import IconsGrid from '../../components/icons-grid/icons-grid.component';
import Slide from '../../components/slide/slide.component';


import './homepage.styles.scss';

const HomePage = () => (
   <div>
      <Banner />
      <div className="text-container">
         <div className="text-area">
            <p>
            There’s no place like home, because home is the place where we can, 
            be ourselves! WELCOME HOME! That is exactly what we are, a community  
            where you can be yourself and where there is no need to pretend about 
            who you are; a community where you can come with your doubts and struggles, 
            and, because we all have them, we’ll be on a journey together to know 
            Jesus and all that He is. Here, Jesus is at the centre of all things 
            and He receives the glory! Connect is a community for imperfect people 
            with real problems and struggles, but where we look to Jesus, and in 
            Him find abundant life.
            </p>
         </div>
      </div>
      <IconsGrid />
      <Slide />

   </div>
);

export default HomePage;