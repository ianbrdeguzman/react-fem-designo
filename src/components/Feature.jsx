import React from 'react';
import styled from 'styled-components';
import { device } from './device';

const Article = styled.article`
    width: 90%;
    margin: 1rem 0;
    text-align: center;
    div {
        position: relative;
    }
    p {
        margin: 2rem 0;
    }
    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        div:last-child {
            margin: 0 0 0 2rem;
        }
        p {
            margin: 0;
        }
    }
    @media ${device.desktop} {
        width: 60%;
    }
`;

const Feature = ({ image, title, text }) => {
    return (
        <Article>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </Article>
    );
};

export default Feature;
