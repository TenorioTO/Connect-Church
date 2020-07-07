import React from 'react';
import Banner from '../../components/banner/banner.component';
import Feeds from '../../components/feeds/feeds.component';

import './homepage.styles.scss';

const HomePage = () => (
   <div>
      <Banner />
      <Feeds />
   </div>
);

export default HomePage;