import React from 'react';
import Movies from './Movies';
import TvShows from './TvShows';
import MovieDetail from './MovieDetail';
import SearchMovies from './SearchMovies';
import { Routes, Route } from 'react-router-dom';

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='movie/:movieId' element={<MovieDetail />} />
            <Route path='/tv' element={<TvShows />} />
            <Route path='search/movies/:searchTerm' element={<SearchMovies />} />
        </Routes>
    );
}

export default Pages;