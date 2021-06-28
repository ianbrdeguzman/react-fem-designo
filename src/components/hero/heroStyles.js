import styled from 'styled-components';
import { device } from '../helpers/device';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    color: #ffffff;
    padding: 5rem 0 0 0;
    background: #e7816b;
    text-align: center;
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-position: 0 50%;
    div:nth-child(1) {
        width: 85%;
        margin: 0 auto;
    }
    h1 {
        font-size: 2rem;
        font-weight: 500;
    }
    p {
        margin: 2rem 0;
    }
    @media ${device.tablet} {
        width: 90%;
        margin: 0 auto;
        border-radius: 1rem;
        background-position: 300% 50%;
        div:nth-child(1) {
            width: 70%;
            margin: 0 auto;
        }
        h1 {
            font-size: 2.5rem;
        }
    }
    @media ${device.laptop} {
        background-position: 100% 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div:first-child {
            text-align: left;
            margin: 0 0 0 4rem;
        }
        h1 {
            line-height: 1;
        }
    }
    @media ${device.desktop} {
        width: 60%;
    }
`;

export const Button = styled(Link)`
    padding: 1rem 2rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    background-color: #ffffff;
    color: #000000;
    font-size: 0.8rem;
    &:hover {
        color: #ffffff;
        background-color: #ffad9b;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 480px;
    overflow: hidden;
    position: relative;
    img {
        position: absolute;
        top: -15%;
        transform: translateX(-50%);
    }
    @media ${device.laptop} {
        height: 600px;
        img {
            top: -10%;
            transform: translateX(-50%);
        }
    }
`;