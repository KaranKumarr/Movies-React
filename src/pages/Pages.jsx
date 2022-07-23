import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import Movies from './Movies';
import TvShows from './TvShows';
import MovieDetail from './MovieDetail';
import SearchMovies from './SearchMovies';
import SearchTvShows from './SearchTvShows';
import TvShowDetail from './TvShowDetail';


function Pages() {

    // const location = useLocation();

    return (
        // <AnimatePresence exitBeforeEnter>
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/Movies-React' element={<Navigate to={'/'} />} />
            <Route path='movie/:movieId' element={<MovieDetail />} />
            <Route path='/tv' element={<TvShows />} />
            <Route path='search/movies/:searchTerm' element={<SearchMovies />} />
            <Route path='search/tv/:searchTerm' element={<SearchTvShows />} />
            <Route path='tv/:tvShowId' element={<TvShowDetail />} />
        </Routes>
        // </AnimatePresence>
    );
}

export default Pages;