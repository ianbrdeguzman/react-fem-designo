import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { data } from './data';
import { device } from './device';

const Section = styled.section`
    article {
        margin: 4rem 0 4rem 0;
        text-align: center;
    }
    a {
        color: #000000;
        letter-spacing: 0;
        text-transform: lowercase;
    }
    article > div:first-child {
        padding: 4rem 0;
        background-color: #fdf3f0;
    }
    article > div:first-child h2 {
        font-size: 2rem;
        color: #e7816b;
    }
    article > div:first-child div div:nth-child(1) {
        margin: 2rem 0;
    }
    article:last-child {
        margin: 4rem 0 20rem 0;
    }
    @media ${device.tablet} {
        article {
            width: 90%;
            margin: 4rem auto;
        }
        article > div {
            border-radius: 1rem;
            overflow: hidden;
        }
        article:last-child {
            margin: 4rem auto 18rem Auto;
        }
        article > div:first-child div div:nth-child(1) {
            margin: 0 4rem 0 0;
        }
    }
    @media ${device.laptopL} {
        article {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        article > div:first-child {
            width: 65%;
            height: 326px;
        }
        article > div:last-child {
            width: 30%;
        }
        article:nth-child(2) {
            flex-direction: row-reverse;
        }
        article:last-child {
            margin-bottom: 15rem;
        }
        article > div:first-child div div:nth-child(1) {
            margin: 0 6rem 0 0;
        }
    }
    @media ${device.desktop} {
        article {
            width: 60%;
        }
    }
`;

const InfoWrapper = styled.div`
    background-image: url(${(props) => props.bg});
    background-position: bottom left;
    background-repeat: no-repeat;
    @media ${device.tablet} {
        margin: 0 0 1rem 0;
        h2 {
            text-align: left;
            padding: 0 0 2rem 4rem;
        }
        & > div {
            padding: 0 4rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: left;
        }
    }
    @media ${device.laptopL} {
        margin: 0;
        h2 {
            padding: 0 0 2rem 6rem;
        }
        & > div {
            padding: 0 6rem;
        }
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 326px;
    background-image: url(${(props) => props.bgm});
    @media ${device.tablet} {
        background-repeat: no-repeat;
        background-size: cover;
    }
    @media ${device.desktop} {
        background-image: url(${(props) => props.bgl});
    }
`;

const Locations = () => {
    const { location } = data;

    return (
        <Section>
            <ScrollToTopOnMount />
            {location.map((item, index) => {
                const {
                    country,
                    office,
                    street,
                    city,
                    phone,
                    mail,
                    bgm,
                    bgl,
                    circleBg,
                } = item;
                return (
                    <article key={index}>
                        <InfoWrapper bg={circleBg}>
                            <h2>{country}</h2>
                            <div>
                                <div>
                                    <h3>{office}</h3>
                                    <p>{street}</p>
                                    <p>{city}</p>
                                </div>
                                <div>
                                    <h3>Contact</h3>
                                    <p>
                                        <a href={`tel:${phone}`}>{phone}</a>
                                    </p>
                                    <p>
                                        <a href={`mailto:${mail}`}>{mail}</a>
                                    </p>
                                </div>
                            </div>
                        </InfoWrapper>
                        <ImageWrapper bgm={bgm} bgl={bgl} />
                    </article>
                );
            })}
        </Section>
    );
};

export default Locations;
