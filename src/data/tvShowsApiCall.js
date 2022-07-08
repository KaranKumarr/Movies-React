// const tvShows = require('./dummy data/popularTvShows.json');
// const searchTvShows = require('../data/dummy data/searchTvShows.json');
// const tvShowDetails = require('../data/dummy data/singleTvShowDetails.json');


const API_KEY = process.env.REACT_APP_API_KEY;


export const getGenreName = (id, isTvShow) => {

    const movieGenres = require("./moviesGenres.json");
    const genres = movieGenres.genres;
    const genre = genres.find(g => g.id === id);

    return genre.name;
};

export const getPopularTvShows = async () => {

    const api = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await api.json();

    const filteredData = data.results.filter((data) => {
        return data.backdrop_path != null;
    });

    return filteredData;


    // const filteredData = tvShows.results.filter((data) => {
    //     return data.backdrop_path != null;
    // });

    // return filteredData;
};


export const getTopRatedTvShows = async () => {


    const api = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await api.json();

    const filteredData = data.results.filter((data) => {
        return data.backdrop_path != null;
    });

    return filteredData;

    // const filteredData = tvShows.results.filter((data) => {
    //     return data.poster_path != null;
    // });

    // return filteredData;
};


export const getNowOnTheAirShows = async () => {

    const api = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await api.json();

    const filteredData = data.results.filter((data) => {
        return data.backdrop_path != null;
    });

    return filteredData;


    // const filteredData = tvShows.results.filter((data) => {
    //     return data.poster_path != null;
    // });

    // return filteredData;
};


export const getSearchedTvShows = async (tvShow) => {

    const api = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${tvShow}&page=1&include_adult=false`);
    const data = await api.json();

    const filteredData = data.results.filter((data) => {
        return data.backdrop_path != null;
    });

    return filteredData;




    // return searchTvShows.results;
};


export const getTvShowDetails = async (tvShowId) => {

    const api = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${API_KEY}&language=en-US`);
    const data = await api.json();

    return data;


    // return tvShowDetails;
};
