import React from 'react';
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi'


function Navbar() {
    return (
        <Nav>
            <div>
                {/* Replace p tags with Link from react-router-dom */}
                <SLink>Movies</SLink>
                <SLink>TV Shows</SLink>
            </div>
            <form>
                <FiSearch />
                <input type="text" placeholder='Enter movies here' />
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
`;


export default Navbar;