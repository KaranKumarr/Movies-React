import { useEffect, useState } from 'react';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import { getUpcomingMovies } from '../data/moviesApiCall';
import SmallMovieCard from './SmallMovieCard';

function UpcomingMovies() {
    const [upcomingMovie, setUpcomingMovies] = useState([]);

    useEffect(() => {
        setUpcomingMovies(getUpcomingMovies());
    }, []);


    return (
        <Wrapper>

            <h1 className="heading">
                Coming Soon
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
                {upcomingMovie.map((movie) => {
                    return (
                        <SplideSlide
                            key={movie.id}
                        >
                            <SmallMovieCard
                                title={movie.title}
                                release={movie.release_date}
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

export default UpcomingMovies;