import React from 'react';
import NowPlayingMovies from '../components/NowPlayingMovies';
import TopRatedMovies from '../components/TopRatedMovies';


function Movies() {

  return (
    <div>
      <NowPlayingMovies />
      <TopRatedMovies />
    </div>
  );
}

export default Movies;