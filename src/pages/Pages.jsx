import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Movies from './Movies';
import TvShows from './TvShows';
import MovieDetail from './MovieDetail';
import SearchMovies from './SearchMovies';
import SearchTvShows from './SearchTvShows';
import TvShowDetail from './TvShowDetail';


function Pages() {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Movies />} />
                <Route path='movie/:movieId' element={<MovieDetail />} />
                <Route path='/tv' element={<TvShows />} />
                <Route path='search/movies/:searchTerm' element={<SearchMovies />} />
                <Route path='search/tv/:searchTerm' element={<SearchTvShows />} />
                <Route path='tv/:tvShowId' element={<TvShowDetail />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;