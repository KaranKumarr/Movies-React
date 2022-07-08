import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovieCard from '../components/SearchedMovieCard';
import { getSearchedTvShows } from '../data/moviesApiCall';
import { Link } from 'react-router-dom';

function SearchTvShows() {

    const [tvShows, setTvShows] = useState([]);
    const params = useParams();


    useEffect(() => {
        const fetchTvShows = async () => {
            const results = await getSearchedTvShows(params.searchTerm);
            setTvShows(results);
        };

        fetchTvShows();

    }, [params.searchTerm]);


    return (
        <GridWrapper
        >

            {tvShows.map((movie) => {
                return (
                    <Link key={movie.id}
                        to={'/movie/' + movie.id}
                    >
                        <SearchedMovieCard title={movie.name} imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                        />
                    </Link>
                );
            })}

        </GridWrapper>
    );
}


const GridWrapper = styled.div`
  padding: 2rem 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;



export default SearchTvShows;