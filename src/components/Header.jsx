import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';
import { device } from './device';

const StyledHeader = styled.header`
    padding: 1.5rem;
    background-color: #ffffff;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 200px;
    }
    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
        transform: scale(1.5);
    }
    @media ${device.tablet} {
        button {
            display: none;
        }
    }
`;

const Nav = styled.nav`
    width: 100%;
    padding: 0 1.5rem;
    background-color: #1d1c1e;
    position: absolute;
    top: 100%;
    right: ${(props) => (props.isOpen ? `0` : `100%`)};
    transition: all 0.3s ease;
    ul {
        list-style: none;
    }
    ul li a {
        display: block;
        margin: 1rem 0;
        text-decoration: none;
        color: #ffffff;
        font-size: 2rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }
    ul li a:hover {
        color: #e7816b;
    }
    @media ${device.tablet} {
        background-color: transparent;
        position: relative;
        top: 0;
        left: 0;
        ul {
            display: flex;
            justify-content: flex-end;
        }
        ul li {
            margin: 0 0 0 2rem;
        }
        ul li a {
            display: block;
            color: #000000;
            font-size: 1rem;
        }
    } ;
`;
const Header = () => {
    const { logo, open, close, navbar } = data.header;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledHeader>
            <img src={logo} alt='logo' />
            <button onClick={handleClick}>{isOpen ? close : open}</button>
            <Nav isOpen={isOpen}>
                <ul>
                    {navbar.map((link, index) => {
                        const { url, text } = link;
                        return (
                            <li key={index}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                </ul>
            </Nav>
        </StyledHeader>
    );
};

export default Header;
