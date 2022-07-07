import { useEffect, useState } from 'react';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import { getTopRatedMovies } from '../data/moviesApiCall';
import SmallMovieCard from './SmallMovieCard';

function TopRatedMovies() {

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        setTopRatedMovies(getTopRatedMovies());
        console.log(topRatedMovies);
    }, []);


    return (
        <Wrapper>

            <h1 className="heading">
                Top Rated
            </h1>

            <SSplide
                options={{
                    perPage: 5,
                    gap: "1rem",
                    pagination: false
                }}
            >
                {topRatedMovies.map((movie) => {
                    return (
                        <SplideSlide
                            key={movie.id}
                        >
                            <SmallMovieCard
                                title={movie.title}
                                rating={movie.vote_average}
                                imageUrl={movie.poster_path}
                            />
                        </SplideSlide>
                    );
                })}
            </SSplide>

        </Wrapper>
    );
}


const Wrapper = styled.div`
    padding: 1rem;
    `;

const SSplide = styled(Splide)`
    display: flex;
    width: 100%;
`;



export default TopRatedMovies;