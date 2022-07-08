import { useEffect, useState } from 'react';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import { getTopRatedTvShows } from '../data/moviesApiCall';
import SmallMovieCard from './SmallMovieCard';


function TopRatedTvShows() {

    const [topRatedTvShows, setTopRatedTvShows] = useState([]);

    useEffect(() => {
        const fetchTvShows = async () => {
            const tvShows = await getTopRatedTvShows();
            setTopRatedTvShows(tvShows);
        };

        fetchTvShows();
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
                {topRatedTvShows.map((tvShow) => {
                    return (
                        <SplideSlide
                            key={tvShow.id}
                        >
                            <SmallMovieCard
                                title={tvShow.name}
                                rating={tvShow.vote_average}
                                imageUrl={tvShow.poster_path}
                                tvShowId={tvShow.id}
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



export default TopRatedTvShows;