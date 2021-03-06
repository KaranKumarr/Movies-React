import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovieCard from '../components/SearchedMovieCard';
import { getSearchedTvShows } from '../data/tvShowsApiCall';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >

            {tvShows.map((tvShow) => {
                return (
                    <Link key={tvShow.id}
                        to={'/tv/' + tvShow.id}
                    >
                        <SearchedMovieCard title={tvShow.name} imageUrl={tvShow.poster_path}
                            rating={tvShow.vote_average}
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



export default SearchTvShows;