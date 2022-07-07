import React from 'react';
import { HiStar } from 'react-icons/hi';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function SmallMovieCard({ imageUrl, rating, title }) {

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

    const gradientMotion = {
        changeBg: {
        }
    };

    return (
        <Card
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <div>
                <img src={`https://image.tmdb.org/t/p/original${imageUrl}`} alt={title} />
                <motion.h4
                    variants={cardMotion}
                >
                    <HiStar />
                    {rating}
                </motion.h4>
                <Gradient
                    initial={{
                        background: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.1))",
                        duration: 2
                    }}
                    whileHover={{
                        background: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))",
                        duration: 2
                    }}
                />
            </div>
        </Card>
    );
}

const Card = styled(motion.div)`
    min-height: 25rem;
    min-width: 15rem;
    max-width: 25rem;
    max-height: 30rem;

    position: relative;
    cursor: pointer;
    div{
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        position: absolute;
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