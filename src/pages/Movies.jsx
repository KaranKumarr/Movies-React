import React from 'react';
import NowPlayingMovies from '../components/NowPlayingMovies';
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';

function Movies() {

  return (
    <div>
      <NowPlayingMovies />
      <TopRatedMovies />
      <PopularMovies />
      <UpcomingMovies />
    </div>
  );
}

export default Movies;