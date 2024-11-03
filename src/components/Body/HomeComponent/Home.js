import React from 'react';
import HomeBanner from './HomeBanner';
import HomeRecommend from './HomeRecommend';

const Home = () => {
  return (
    <div className='homePage' >
     <HomeBanner/>
     <HomeRecommend/>
    </div>
  )
}

export default Home
