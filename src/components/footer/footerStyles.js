import styled from 'styled-components';
import { device } from '../helpers/device';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
    position: relative;
`;

export const TalkAbout = styled.div`
    width: 90%;
    padding: 4rem 1rem;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
    background: #e7816b;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${(props) => props.bgs});
    background-position: 100% 50%;
    background-repeat: no-repeat;
    h2 {
        font-size: 2rem;
    }
    p {
        margin: 2rem 0;
    }
    @media ${device.tablet} {
        padding: 4rem 8rem;
        h2 {
            width: 240px;
            margin: 0 auto;
        }
        background-image: url(${(props) => props.bgm});
    }
    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        background-image: url(${(props) => props.bgl});
        h2 {
            margin: unset;
        }
        p {
            margin: unset;
            width: 80%;
        }
        button {
            width: 190px;
        }
    }
    @media ${device.desktop} {
        width: 60%;
    }
`;

export const Content = styled.div`
    background-color: #1d1c1e;
    text-align: center;
    padding: 15rem 0 4rem 0;
    div {
        position: relative;
    }
    @media ${device.laptop} {
        padding: 10rem 0 4rem 0;
    }
`;

export const Logo = styled.div`
    position: relative;
    div:nth-child(1):before {
        content: '';
        width: 90%;
        height: 1px;
        background-color: rgba(255, 255, 250, 10%);
        position: absolute;
        top: 100%;
        left: 5%;
    }
    img {
        width: 200px;
        margin: 2rem 0;
    }
    ul li {
        margin: 2rem 0;
    }
    ul li a:hover {
        color: #e7816b;
    }
    @media ${device.tablet} {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
            display: flex;
        }
        ul li {
            margin: 0 0 0 2rem;
        }
        div:nth-child(1):before {
            content: '';
            width: 345%;
            height: 1px;
            background-color: rgba(255, 255, 250, 10%);
            position: absolute;
            top: 100%;
            left: 0;
        }
    }
    @media ${device.laptop} {
        div:nth-child(1):before {
            width: 650%;
        }
    }
    @media ${device.desktop} {
        width: 60%;
        div:nth-child(1):before {
            width: 570%;
        }
    }
`;

export const Info = styled.div`
    @media ${device.tablet} {
        width: 90%;
        text-align: left;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media ${device.desktop} {
        width: 60%;
    }
`;

export const Office = styled.div`
    margin: 2rem 0;
    color: #8e8d8e;
`;

export const Contact = styled.div`
    color: #8e8d8e;
    p a {
        color: inherit;
        text-transform: lowercase;
        letter-spacing: unset;
    }
    p a:hover {
        color: #e7816b;
    }
`;

export const Social = styled.div`
    a {
        display: inline-block;
        margin: 2rem 0.5rem;
    }
`;

export const Button = styled(Link)`
    display: block;
    margin: 1rem 0 0 0;
    font-size: 0.8rem;
    padding: 1rem;
    border-radius: 5px;
    color: #000000;
    background-color: #ffffff;
    transition: all 0.3s ease;
    &:hover {
        color: #ffffff;
        background-color: #ffad9b;
    }
    @media ${device.laptop} {
        width: 145px;
    }
`;