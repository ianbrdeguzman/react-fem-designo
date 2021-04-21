import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { data } from './data';
import { device } from './device';
import { Link } from 'react-router-dom';

const Section = styled.section`
    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    article div h2 {
        font-size: 2rem;
    }
    article div p {
        margin: 1rem 0;
    }
    article div:first-child {
        width: 100%;
        height: 320px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    article div:first-child img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    article:first-child div:last-child {
        padding: 4rem 1rem;
        color: #ffffff;
        background-color: #e7816b;
    }
    article:nth-child(2) {
        margin: 4rem 0;
    }
    article:nth-child(2) div:last-child {
        padding: 4rem 1rem;
        color: #e7816b;
        background-color: #fdf3f0;
    }
    article:nth-child(2) div:last-child p {
        color: #000000;
    }
    article:last-child {
        margin: 4rem 0 20rem 0;
    }
    article:last-child div:last-child {
        padding: 4rem 1rem;
        color: #e7816b;
        background-color: #fdf3f0;
    }
    article:last-child div:last-child p {
        color: #000000;
    }
    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        article {
            width: 90%;
            border-radius: 1rem;
            overflow: hidden;
        }
        article:first-child div:last-child {
            padding: 4rem;
        }
        article:nth-child(2) div:last-child {
            padding: 4rem;
        }
        article:last-child div:last-child {
            padding: 4rem;
        }
    }
    @media ${device.laptop} {
        article:first-child {
            flex-direction: row-reverse;
        }
        article:nth-child(2) {
            flex-direction: row;
        }
        article:last-child {
            flex-direction: row-reverse;
            margin: 4rem 0 15rem 0;
        }
        article:first-child div:first-child {
            width: 476px;
            height: 480px;
        }
        article:first-child div:last-child {
            width: 52%;
            height: 480px;
            padding: 6rem 4rem 4rem 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: left;
        }
        article div h2 {
            width: 100%;
        }
        article:not(:first-child) div:first-child {
            width: 476px;
            height: 640px;
        }
        article:not(:first-child) div:last-child {
            width: 50%;
            height: 640px;
            padding: 6rem 4rem 4rem 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: left;
        }
    }
    @media ${device.laptop} {
        article:first-child div:last-child {
            width: 65%;
            padding: 4rem;
        }
        article div:last-child h2 {
            font-size: 2.5rem;
        }
        article div:last-child p {
            font-size: 1.2rem;
        }
        article:not(:first-child) div:last-child {
            width: 65%;
            padding: 3rem;
        }
    }
    @media ${device.laptopL} {
        article:first-child div:last-child {
            padding: 6rem 10rem 4rem 10rem;
        }
        article:not(:first-child) div:last-child {
            padding: 6rem 10rem 4rem 10rem;
        }
    }
    @media ${device.desktop} {
        article {
            width: 60%;
        }
        article:first-child div:last-child {
            width: 60%;
            padding: 6rem 4rem 4rem 4rem;
        }
        article:not(:first-child) div:last-child {
            width: 65%;
            padding: 6rem 4rem 4rem 4rem;
        }
    }
`;
const HeroImageWrapper = styled.div`
    background-image: url(${(props) => props.bgs});
    @media ${device.tablet} {
        background-image: url(${(props) => props.bgm});
    }
    @media ${device.laptop} {
        background-image: url(${(props) => props.bgl});
    }
`;
const InfoWrapper = styled.div`
    background-image: url(${(props) => props.bgs});
    background-repeat: no-repeat;
    background-position: 100% -50%;
    @media ${device.tablet} {
        background-image: url(${(props) => props.bgl});
        background-position: 100% 0;
    }
`;
const ClassImageWrapper = styled.div`
    background-image: url(${(props) => props.bgs});
    @media ${device.tablet} {
        background-image: url(${(props) => props.bgm});
    }
    @media ${device.laptop} {
        background-image: url(${(props) => props.bgl});
    }
`;
const RealImageWrapper = styled.div`
    background-image: url(${(props) => props.bgs});
    @media ${device.tablet} {
        background-image: url(${(props) => props.bgm});
    }
    @media ${device.laptop} {
        background-image: url(${(props) => props.bgl});
    }
`;
const LocationWrapper = styled.div`
    text-align: center;
    margin: 0 auto;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 0 2rem 0;
        position: relative;
    }
    div h2 {
        letter-spacing: 2px;
        margin: 0 0 2rem 0;
    }
    div button {
        color: #ffffff;
        background-color: #e7816b;
        padding: 1rem;
        border-radius: 5px;
        transition: all 0.3s ease;
    }
    div button:hover {
        background-color: #ffad9b;
    }
    div div {
        margin: 2rem 0;
    }
    div div:nth-child(1)::before {
        content: '';
        width: 202px;
        height: 202px;
        border-radius: 50%;
        z-index: -1;
        opacity: 40%;
        background: linear-gradient(
            180deg,
            rgba(93, 2, 2, 0.497569),
            rgba(93, 2, 2, 0.0001)
        );
        position: absolute;
        top: 0;
        left: 0;
    }
    div:nth-child(2) div:nth-child(1)::before {
        background: linear-gradient(
            90deg,
            rgba(93, 2, 2, 0.497569),
            rgba(93, 2, 2, 0.0001)
        );
    }
    div:nth-child(3) div:nth-child(1)::before {
        background: linear-gradient(
            0deg,
            rgba(93, 2, 2, 0.497569),
            rgba(93, 2, 2, 0.0001)
        );
    }
    @media ${device.laptop} {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    @media ${device.desktop} {
        width: 60%;
    }
`;
const Button = styled(Link)`
    color: #ffffff;
    background-color: #e7816b;
    padding: 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #ffad9b;
    }
`;

const About = () => {
    const { about } = data;
    const {
        textOne,
        textTwo,
        textThree,
        textFour,
        textFive,
        heroSmall,
        heroMedium,
        heroLarge,
        classSmall,
        classMedium,
        classLarge,
        realSmall,
        realMedium,
        realLarge,
        bgs,
        bgl,
        canadaImage,
        australiaImage,
        ukImage,
    } = about;

    return (
        <Section>
            <ScrollToTopOnMount />
            <article>
                <HeroImageWrapper
                    bgs={heroSmall}
                    bgm={heroMedium}
                    bgl={heroLarge}
                />
                <InfoWrapper bgs={bgs} bgl={bgl}>
                    <h2>About Us</h2>
                    <p>{textOne}</p>
                </InfoWrapper>
            </article>
            <article>
                <ClassImageWrapper
                    bgs={classSmall}
                    bgm={classMedium}
                    bgl={classLarge}
                />
                <InfoWrapper bgs={bgs} bgl={bgl}>
                    <h2>World-Class Talent</h2>
                    <p>{textTwo}</p>
                    <p>{textThree}</p>
                </InfoWrapper>
            </article>
            <LocationWrapper>
                <div>
                    <div>
                        <img src={canadaImage} alt='Canada' />
                    </div>
                    <h2>CANADA</h2>
                    <Button to='/locations'>SEE LOCATION</Button>
                </div>
                <div>
                    <div>
                        <img src={australiaImage} alt='Canada' />
                    </div>
                    <h2>AUSTRALIA</h2>
                    <Button to='/locations'>SEE LOCATION</Button>
                </div>
                <div>
                    <div>
                        <img src={ukImage} alt='Canada' />
                    </div>
                    <h2>UNITED KINGDOM</h2>
                    <Button to='/locations'>SEE LOCATION</Button>
                </div>
            </LocationWrapper>
            <article>
                <RealImageWrapper
                    bgs={realSmall}
                    bgm={realMedium}
                    bgl={realLarge}
                />
                <InfoWrapper bgs={bgs} bgl={bgl}>
                    <h2>The Real Deal</h2>
                    <p>{textFour}</p>
                    <p>{textFive}</p>
                </InfoWrapper>
            </article>
        </Section>
    );
};

export default About;
