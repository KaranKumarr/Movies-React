
const nowPlayingData = require('../data/dummy data/nowPlayingMovies.json');
const movieDetails = require('../data/dummy data/singleMovieDetails.json');
const searchMovies = require('../data/dummy data/searchMovies.json');
const genresData = require("./moviesGenres.json");


const API_KEY = process.env.REACT_APP_API_KEY;


export const getGenreName = (id) => {
    const genres = genresData.genres;
    let genre = genres.find(g => g.id === id);
    return genre.name;
};

export const getNowPlayingMovies = async () => {

    // const api = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    // const data = await api.json();

    // return data.results;

    return nowPlayingData.results;
};


export const getTopRatedMovies = async () => {

    // const api = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    // const data = await api.json();

    // return data.results;

    return nowPlayingData.results;
};


export const getPopularMovies = async () => {

    // const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    // const data = await api.json();

    // return data.results;

    return nowPlayingData.results;
};


export const getUpcomingMovies = async () => {

    // const api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=us`);
    // const data = await api.json();

    // const filteredData = data.results.filter((movie) => {
    //     return movie.poster_path != null;
    // });

    // return filteredData;

    return nowPlayingData.results;
};

export const getMovieDetails = async (movie_id) => {
    // const api = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
    // const data = await api.json();

    // return data;

    return movieDetails;
};

export const getSearchedMovies = async (movie) => {

    return searchMovies.results;
};
