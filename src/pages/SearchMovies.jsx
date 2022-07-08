import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovieCard from '../components/SearchedMovieCard';
import { getSearchedMovies } from '../data/moviesApiCall';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SearchMovies() {

    const [movies, setMovies] = useState([]);
    const params = useParams();


    useEffect(() => {
        const fetchMovies = async () => {
            const results = await getSearchedMovies(params.searchTerm);
            setMovies(results);
        };

        fetchMovies();

    }, [params.searchTerm]);


    return (
        <GridWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >

            {movies.map((movie) => {
                return (
                    <Link key={movie.id}
                        to={'/movie/' + movie.id}
                    >
                        <SearchedMovieCard title={movie.title} imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                        />
                    </Link>
                );
            })}

        </GridWrapper>
    );
}


const GridWrapper = styled(motion.div)`
  padding: 2rem 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

// const Grid = styled.div`
//     max-width: 75rem;
//     margin: 0 auto;
//     display: grid;
//     gap: 1rem;
// `;


export default SearchMovies;