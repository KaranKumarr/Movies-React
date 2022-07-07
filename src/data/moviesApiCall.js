
const nowPlayingData = require('../data/dummy data/nowPlayingMovies.json');
const genresData = require("./moviesGenres.json");




export const getGenreName = (id) => {
    const genres = genresData.genres;
    let genre = genres.find(g => g.id === id);
    console.log(genre);
    return genre.name;
};

export const getNowPlayingMovies = async () => {

    // const api = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cd825a9fb46ffe14db613e1c9dd7d6a6&language=en-US&page=1');
    // const data = await api.json();

    // return data.results;

    return nowPlayingData.results;
};


export const getTopRatedMovies = async () => {

    // const api = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cd825a9fb46ffe14db613e1c9dd7d6a6&language=en-US&page=1');
    // const data = await api.json();

    // return data.results;

    return nowPlayingData.results;
};


export const getPopularMovies = async () => {

    // const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=cd825a9fb46ffe14db613e1c9dd7d6a6&language=en-US&page=1');
    // const data = await api.json();

    // return data.results;

    return nowPlayingData.results;
};


export const getUpcomingMovies = async () => {

    // const api = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=cd825a9fb46ffe14db613e1c9dd7d6a6&language=en-US&page=1&region=us');
    // const data = await api.json();

    // const filteredData = data.results.filter((movie) => {
    //     return movie.poster_path != null;
    // });

    // return filteredData;

    return nowPlayingData.results;
};

