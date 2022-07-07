import React from 'react';
import { HiStar } from 'react-icons/hi';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SmallMovieCard({ imageUrl, rating, title, release, movieId }) {

    let _resultDate;

    if (release) {
        let date = new Date(release);
        let options = { year: 'numeric', month: 'short', day: '2-digit' };
        _resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    }


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
        }
    };


    return (
        <Card
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <Link to={'/movie/'+movieId}>
                <img src={`https://image.tmdb.org/t/p/original${imageUrl}`} alt={title} />

                {
                    release ? (
                        <motion.h4
                            variants={cardMotion}
                            style={{ opacity: "50%" }}
                        >
                            {_resultDate}
                        </motion.h4>

                    ) : (
                        <motion.h4
                            variants={cardMotion}
                        >
                            <HiStar />
                            {rating}
                        </motion.h4>

                    )
                }
                <Gradient
                    initial={{
                        background: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.25))",
                        duration: 2
                    }}
                    whileHover={{
                        background: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))",
                        duration: 2
                    }}
                />
            </Link>
        </Card>
    );
}

const Card = styled(motion.div)`
    min-height: 20rem;
    min-width: 10rem;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    @media (max-width:1000px) {
        min-height: 14rem;
        min-width: 7rem;
    }
    @media(max-width:750){
        min-height: 11rem;
        min-width: 5.5rem;
    }
    cursor: pointer;
    Link{
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: scale-down;
        left: 0;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
    h4{
        font-size: 1.25rem;
        z-index: 10;
        position: absolute;
        bottom: 0;
        color: white;
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;   
    }
    svg{
        color: #F5C518;
        margin: 0 0.25rem;
    }
`;


const Gradient = styled(motion.div)`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    
`;

export default SmallMovieCard;