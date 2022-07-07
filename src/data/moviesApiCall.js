
const nowPlayingData = require('../data/dummy data/nowPlayingMovies.json');
const genresData = require("./moviesGenres.json");




export const getGenreName = (id) => {
    const genres = genresData.genres;
    let genre = genres.find(g => g.id === id);
    console.log(genre);
    return genre.name;
};

export const getNowPlayingMovies = () => {

    return nowPlayingData.results;
};


export const getTopRatedMovies = () => {

    return nowPlayingData.results;
};


export const getPopularMovies = () => {

    return nowPlayingData.results;
};


export const getUpcomingMovies = () => {

    return nowPlayingData.results;
};

