import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';


function Navbar() {

    const [activeTab, setActiveTab] = useState("movies");

    return (
        <Nav>
            <div>
                {/* Replace p tags with Link from react-router-dom */}
                <SLink
                    className={activeTab === 'movies' ? 'active' : ''}
                    onClick={() => setActiveTab("movies")}
                >Movies</SLink>
                <SLink
                    className={activeTab === 'tv shows' ? 'active' : ''}
                    onClick={() => setActiveTab("tv shows")}
                >TV Shows</SLink>
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
`;

const SLink = styled.p`
    font-size: 1.5rem;
    margin: 0rem 2rem;
    cursor: pointer;
    opacity: 0.75;
`;


export default Navbar;