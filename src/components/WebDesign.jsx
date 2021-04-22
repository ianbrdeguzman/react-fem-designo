import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import Project from './Project';
import ProjectList from './ProjectList';
import { data } from './data';
import { device } from './device';

const Hero = styled.div`
    width: 100%;
    margin: 0 auto 4rem auto;
    padding: 4rem 1rem;
    text-align: center;
    color: #ffffff;
    background-color: #e7816b;
    background-image: url(${(props) => props.bg});
    background-position: 23% 50%;
    h1 {
        margin: 0 0 2rem 0;
        font-size: 2rem;
    }
    @media ${device.mobileM} {
        background-position: 21% 50%;
    }
    @media ${device.mobileL} {
        background-position: 18% 50%;
    }
    @media ${device.tablet} {
        width: 90%;
        border-radius: 1rem;
        p {
            width: 60%;
            margin: 0 auto;
        }
    }
    @media ${device.laptopL} {
        width: 90%;
        border-radius: 1rem;
        p {
            width: 40%;
        }
    }
    @media ${device.desktop} {
        width: 60%;
        border-radius: 1rem;
    }
`;

const Projects = styled.div`
    margin: 0 auto 4rem auto;
    display: flex;
    flex-wrap: wrap;
    article {
        text-align: center;
        width: 90%;
        margin: 0 auto 2rem auto;
        border-radius: 1rem;
        overflow: hidden;
        cursor: pointer;
    }
    article div {
        transition: all 0.3s ease;
    }
    article:hover div {
        color: #ffffff;
        background-color: #e7816b;
    }
    article:hover div h2 {
        color: #ffffff;
    }
    @media ${device.tablet} {
        width: 90%;
        article {
            width: 100%;
        }
    }
    @media ${device.laptop} {
        width: 90%;
        article {
            width: 48%;
        }
    }
    @media ${device.laptop} {
        width: 90%;
        article {
            max-width: 400px;
        }
    }
    @media ${device.desktop} {
        width: 60%;
        article {
            max-width: 350px;
        }
    }
`;

const ImageWrapper = styled.div`
    height: 255px;
    margin: 0 auto;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media ${device.tablet} {
        height: 400px;
    }
`;

const InfoWrapper = styled.div`
    padding: 2rem 0;
    background-color: #fdf3f0;
    h2 {
        color: #e7816b;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    @media ${device.tablet} {
        padding: 2rem;
    }
`;

const Section = styled.section`
    margin: 0 0 18rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
        border: 1px solid red;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    @media ${device.laptop} {
        padding: 6rem 2rem;
        display: grid;
        justify-items: center;
        align-items: stretch;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-template-areas:
            'web app'
            'web graphic';
        a:nth-child(1) {
            grid-area: web;
            height: auto;
        }
        a:nth-child(2) {
            grid-area: app;
        }
        a:nth-child(3) {
            grid-area: graphic;
        }
    }
    @media ${device.laptopL} {
        padding: 6rem 2.5rem;
    }
    @media ${device.desktop} {
        padding: 6rem 22rem;
    }
`;

const WebDesign = () => {
    const { bg, designs, projects, text } = data.webDesign[0];
    return (
        <section>
            <ScrollToTopOnMount />
            <Hero bg={bg}>
                <h1>Web Design</h1>
                <p>{text}</p>
            </Hero>
            <Projects>
                {designs.map((project, index) => {
                    const { image, text, title } = project;
                    return (
                        <article key={index}>
                            <ImageWrapper>
                                <img src={image} alt={title} />
                            </ImageWrapper>
                            <InfoWrapper>
                                <h2>{title}</h2>
                                <p>{text}</p>
                            </InfoWrapper>
                        </article>
                    );
                })}
            </Projects>
            <Section>
                {projects.map((project, index) => {
                    const { text, icon, bgS, bgM, bgL, route } = project;
                    return (
                        <Project
                            key={index}
                            text={text}
                            icon={icon}
                            bgs={bgS}
                            bgm={bgM}
                            bgl={bgL}
                            route={route}
                        />
                    );
                })}
            </Section>
        </section>
    );
};

export default WebDesign;
