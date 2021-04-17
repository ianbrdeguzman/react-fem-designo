import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';
import { device } from './device';
import { Link } from 'react-router-dom';

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
        padding: 1.5rem 2rem;
        button {
            display: none;
        }
    }
    @media ${device.laptop} {
        padding: 1.5rem 3rem;
    }
    @media ${device.laptopL} {
        padding: 1.5rem 5rem;
    }
    @media ${device.desktop} {
        padding: 1.5rem 24rem;
    }
    @media ${device.desktopL} {
        padding: 1.5rem 8rem;
    }
`;

const Nav = styled.nav`
    width: 100%;
    padding: 0;
    background-color: #1d1c1e;
    position: absolute;
    top: 100%;
    right: ${(props) => (props.isOpen ? `0` : `100%`)};
    transition: all 0.3s ease;
    ul li a {
        margin: 1rem 0;
        font-size: 2rem;
        display: block;
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
            color: #1d1c1e;
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
            <Link to='/'>
                <img src={logo} alt='logo' />
            </Link>
            <button onClick={handleClick}>{isOpen ? close : open}</button>
            <Nav isOpen={isOpen}>
                <ul>
                    {navbar.map((link, index) => {
                        const { url, text, route } = link;
                        return (
                            <li key={index}>
                                <Link to={route} href={url}>
                                    {text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Nav>
        </StyledHeader>
    );
};

export default Header;
