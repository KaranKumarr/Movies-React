import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPopularTvShows } from '../data/tvShowsApiCall';
import LargeMovieCard from './LargeMovieCard';


function PopularTvShows() {

    const [popularTvShows, setPopularTvShows] = useState([]);

    useEffect(() => {

        const fetchTvShows = async () => {
            const tvShows = await getPopularTvShows();
            setPopularTvShows(tvShows);
        };
        fetchTvShows();
    }, []);


    return (

        <Wrapper>
            <h1 className='heading'>Now Trending</h1>
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
                    popularTvShows.map((tvShow) => {
                        return (
                            <SplideSlide key={tvShow.id}>
                                <LargeMovieCard
                                    title={tvShow.name}
                                    rating={tvShow.vote_average}
                                    imageUrl={tvShow.backdrop_path}
                                    genres={tvShow.genre_ids}
                                    release={tvShow.first_air_date}
                                    tvShowId={tvShow.id}
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


export default PopularTvShows;