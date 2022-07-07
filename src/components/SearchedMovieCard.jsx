import React from 'react';
import styled from 'styled-components';
import { HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';

function SearchedMovieCard({ title, imageUrl, rating }) {


    const cardMotion = {
        hover: {
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut"
            }
        },
        rest: {
            opacity: 0,
            transition: {
                duration: 0.4,
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
            <img src={`https://image.tmdb.org/t/p/original${imageUrl}`} alt={title} />
            <h3>
                {title}
            </h3>
            <motion.h4
                variants={cardMotion}
            >
                <HiStar />
                {rating}
            </motion.h4>
            <Gradient
                initial={{
                    background: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.25))",
                    duration: 0.5
                }}
                whileHover={{
                    background: "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))",
                    duration: 0.5
                }}
            />
        </Card>
    );
}

const Card = styled(motion.div)`
    
    height: 20rem;
    position:relative;

    img{
        height: 14rem;
        width: 10rem;
        border-radius: 1rem;
        transition: all ease-in 200ms;
        cursor: pointer;
    }
    img:hover{
        border-radius: 0;
        cursor: pointer;
        z-index: 1;
    }
    h3{
        width: 10rem;
        text-align: center;
    }
    h4{
        
        cursor: pointer;
        font-size: 1.25rem;
        z-index: 10;
        position: absolute;
        bottom: 30%;
        right: 0%;
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
    cursor: pointer;
    position: absolute;
    top: 0;
    height: 14rem;
    width: 10rem;
    border-radius: 1rem;
`;


export default SearchedMovieCard;