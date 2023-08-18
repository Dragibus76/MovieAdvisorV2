import React from 'react';
// import CarouselComponent from '../components/CarouselComponent';
// import { fetchMediaNowPlaying } from '../api/ApiCalls';
import './Home.css';

const Home = () => {
  return (
    <div className='HeroContainer'>
      <div className='TextContainer'>
        <h1>Bienvenue sur MovieAdvisor</h1>
        <p>Car ça n'a jamais été aussi simple d'avoir un avis sur un film ou une série !</p>
      </div>
      {/* <CarouselComponent fetchData={(page) => fetchMediaNowPlaying('movie', page)} /> */}

    </div>
  );
};

export default Home;
