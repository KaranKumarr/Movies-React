import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { GiTheater, GiTv } from 'react-icons/gi';


function Navbar() {

    const [activeTab, setActiveTab] = useState("movies");

    return (
        <Nav>
            <div>
                {/* Replace p tags with Link from react-router-dom */}
                <Link
                    to={"/"}>
                    <SLink
                        className={activeTab === 'movies' ? 'active' : ''}
                        onClick={() => setActiveTab("movies")}
                    >
                        <GiTheater />
                        <span>Movies</span>
                    </SLink>
                </Link>
                <Link
                    to={'/tv'}>
                    <SLink
                        className={activeTab === 'tv shows' ? 'active' : ''}
                        onClick={() => setActiveTab("tv shows")}
                    >
                        <GiTv />
                        <span>TV Shows</span>
                    </SLink>
                </Link>
            </div>
            <form>
                <FiSearch />
                <input type="text"
                    placeholder={`Enter ${activeTab} here`}
                />
            </form>
        </Nav>
    );
}

const Nav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    div{
        display: flex;
    }

    .active{
        opacity: 1;
    }

    form {
        background: #0D0D0F;
        padding: 1rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    form input{
        background: transparent;
        outline: none;
        border: none;
        color: white;
        padding: 0 0.5rem;
    }  
    form svg{
        font-size: 1.25rem;
    }
    @media (max-width:750px){
        padding: 0.5rem;
        form{
            padding: 0.5rem;
        }
        form svg{
            font-size: 1rem;
        }
    }
    @media (max-width:500px){
        form{
            padding: 0.25rem;
            width: 50%;
        }
        form svg{
            font-size: 0;
        }
        form input{
            padding: 0 0.25;
        }
    }

`;

const SLink = styled.p`
    font-size: 1.5rem;
    margin: 0rem 2rem;
    cursor: pointer;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        color: white;
        margin: 0 1rem
    }
    @media(max-width:750px){
        font-size: 1.25rem;
        svg{
            margin: 0 0.5rem;
        }
    }
    @media(max-width:500px){
        span{
        display: none;
        }
        svg{
            margin: 0;
        }
    }
`;


export default Navbar;