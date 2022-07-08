import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getNowPlayingMovies } from '../data/moviesApiCall';
import LargeMovieCard from './LargeMovieCard';


export default function NowPlayingMovies() {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);



    useEffect(() => {

        const fetchMovies = async () => {
            const movies = await getNowPlayingMovies();
            setNowPlayingMovies(movies);
        };

        fetchMovies();
    }, []);


    return (

        <Wrapper>
            <h1 className='heading'>Now In Cinemas</h1>
            <SSplide

                options={{
                    autoplay: true,
                    arrows: false,
                    perPage: 2,
                    pagination: false,
                    gap: "0.5rem",
                    type: 'loop',
                    breakpoints: {
                        1000: {
                            perPage: 1
                        }
                    }
                }}
            >
                {
                    nowPlayingMovies.map((movie) => {
                        return (
                            <SplideSlide key={movie.id}>
                                <LargeMovieCard
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    imageUrl={movie.backdrop_path}
                                    genres={movie.genre_ids}
                                    release={movie.release_date}
                                    movieId={movie.id}
                                />
                            </SplideSlide>
                        );
                    })
                }
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

