import React from 'react';
import NowPlayingMovies from '../components/NowPlayingMovies';
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import { motion } from 'framer-motion';

function Movies() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <NowPlayingMovies />
      <TopRatedMovies />
      <PopularMovies />
      <UpcomingMovies />
    </motion.div>
  );
}

export default Movies;