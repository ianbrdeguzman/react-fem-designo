import React from 'react';
import styled from 'styled-components';
import { device } from './device';
import { Link } from 'react-router-dom';

const Article = styled(Link)`
    color: #ffffff;
    width: 90%;
    height: 250px;
    margin: 1rem 0;
    border-radius: 1rem;
    overflow: hidden;
    text-transform: uppercase;
    background: url(${(props) => props.bgs});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    div {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        text-align: center;
    }
    div:hover {
        background-color: rgba(231, 129, 107, 50%);
    }
    h2 {
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 1px;
    }
    p {
        margin: 1rem 0 0 0;
        font-weight: 600;
        letter-spacing: 4px;
        position: relative;
    }
    @media ${device.tablet} {
        background: url(${(props) => props.bgm});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    @media ${device.laptop} {
        background: url(${(props) => props.bgl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
`;

const Project = ({ text, icon, bgs, bgm, bgl, route }) => {
    console.log(bgs);
    return (
        <Article to={route} bgs={bgs} bgm={bgm} bgl={bgl}>
            <div>
                <h2>{text} design</h2>
                <p>
                    view projects <img src={icon} alt='arrow' />
                </p>
            </div>
        </Article>
    );
};

export default Project;
