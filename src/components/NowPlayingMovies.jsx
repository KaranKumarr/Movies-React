import { SplideSlide, Splide } from '@splidejs/react-splide';
import { useState, useEffect } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import { getNowPlayingMovies } from '../data/moviesApiCall';
import LargeMovieCard from './LargeMovieCard';


export default function NowPlayingMovies() {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);



    useEffect(() => {
        setNowPlayingMovies(getNowPlayingMovies());
    }, []);


    return (

        <Wrapper>
            <h1 className='heading'>Now In Cinemas</h1>
            <SSplide

                options={{
                    perPage: 2,
                    // arrows: false,
                    pagination: false,
                    // drag: 'free',
                    gap: "0.5rem"
                }}
            >
                {
                    nowPlayingMovies.map((movie) => {
                        return (
                            <SplideSlide key={movie.title}>
                                <LargeMovieCard
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    imageUrl={movie.backdrop_path}
                                    genres={movie.genre_ids}
                                    release={movie.release_date}
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

