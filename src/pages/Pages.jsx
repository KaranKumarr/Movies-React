import React from 'react';
import Movies from './Movies';
import TvShows from './TvShows';
import MovieDetail from './MovieDetail';
import SearchMovies from './SearchMovies';
import SearchTvShows from './SearchTvShows';
import { Routes, Route } from 'react-router-dom';
import TvShowDetail from './TvShowDetail';

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='movie/:movieId' element={<MovieDetail />} />
            <Route path='/tv' element={<TvShows />} />
            <Route path='search/movies/:searchTerm' element={<SearchMovies />} />

            <Route path='search/tv/:searchTerm' element={<SearchTvShows />} />
            <Route path='tv/:tvShowId' element={<TvShowDetail />} />
        </Routes>
    );
}

export default Pages;