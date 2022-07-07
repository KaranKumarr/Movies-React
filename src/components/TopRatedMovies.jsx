import { useEffect, useState } from 'react';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import { getTopRatedMovies } from '../data/moviesApiCall';
import SmallMovieCard from './SmallMovieCard';


function TopRatedMovies() {

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getTopRatedMovies();
            setTopRatedMovies(movies);
        };

        fetchMovies();
    }, []);


    return (
        <Wrapper>

            <h1 className="heading">
                Top Rated
            </h1>

            <SSplide
                options={{
                    gap: "1rem",
                    pagination: false,
                    perPage: 5,
                    type: 'loop',
                    breakpoints: {
                        1250: {
                            perPage: 4
                        },
                        700: {
                            perPage: 3,
                        }
                    }
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