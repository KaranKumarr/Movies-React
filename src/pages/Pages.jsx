import React from 'react';
import Movies from './Movies';
import TvShows from './TvShows';
import MovieDetail from './MovieDetail';
import { Routes, Route } from 'react-router-dom';

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='movie/:movieId' element={<MovieDetail />} />
            <Route path='/tv' element={<TvShows />} />
        </Routes>
    );
}

export default Pages;