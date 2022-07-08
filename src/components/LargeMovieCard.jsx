import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { getGenreName } from '../data/moviesApiCall';

function LargeMovieCard({ title, rating, imageUrl, genres, release, movieId, tvShowId }) {

    const genreList = genres.map((g) => {
        return getGenreName(g);
    });

    let date = new Date(release);
    let options = { year: 'numeric', month: 'short', day: '2-digit' };
    let _resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);


    const cardMotion = {
        hover: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut"
            }
        },
        rest: {
            opacity: 0,
            y: "100vh",
            transition: {
                duration: 2,
                type: "tween",
                ease: "easeIn"
            }
        },
    };

    return (
        <Card
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <Link
                to={tvShowId ? '/tv/' + tvShowId : '/movie/' + movieId}
            >
                <img src={`https://image.tmdb.org/t/p/original${imageUrl}`} alt={title} />
                <h2>{title.toUpperCase()}</h2>
                <h3>
                    <HiStar />
                    {rating}
                </h3>
                <Summary
                    variants={cardMotion}
                >
                    {`${genreList.toString()} | ${_resultDate}`}

                </Summary>
                <Gradient />
            </Link>
        </Card>
    );
}

const Card = styled(motion.div)`
    min-height: 25rem;
    min-width: 20rem;
    position: relative;
    cursor: pointer;
    Link{
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        object-fit: cover;
        border-radius: 2rem;
    }
    h2{
        z-index: 10;
        position: absolute;
        left: 0%;
        bottom: 20%;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.25rem;
        margin: 0 1rem;
    }
    h3{
        z-index: 10;
        position: absolute;
        right: 0%;
        bottom: 0%;
        margin: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;   
    }
  
    svg{
        color: #F5C518;
        margin: 0 0.25rem;
    }
`;

const Summary = styled(motion.div)`
    position: absolute;
    width: 50%;
    margin: 1rem;
    bottom: 0;
    color: rgba(255,255,255,0.8);
    letter-spacing: 2px;
    z-index: 10;
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.75));
`;



export default LargeMovieCard;