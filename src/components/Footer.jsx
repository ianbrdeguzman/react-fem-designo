import React from 'react';
import styled from 'styled-components';
import { data } from './data';
import { device } from './device';

const StyledFooter = styled.footer`
    position: relative;
`;
const TalkAbout = styled.div`
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
    background-image: url(${(props) => props.bg});
    background-position: 200% 180%;
    h2 {
        font-size: 2rem;
    }
    p {
        margin: 2rem 0;
    }
    button {
        padding: 1rem 2rem;
        border-radius: 5px;
        transition: all 0.3s ease;
    }
    button:hover {
        color: #ffffff;
        background-color: #ffad9b;
    }
    @media ${device.tablet} {
        padding: 4rem 8rem;
        h2 {
            width: 240px;
            margin: 0 auto;
        }
    }
    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        background-position: 150% 1900%;
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

const Content = styled.div`
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

const Logo = styled.div`
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

const Info = styled.div`
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

const Office = styled.div`
    margin: 2rem 0;
    color: #8e8d8e;
`;

const Contact = styled.div`
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

const Social = styled.div`
    a {
        display: inline-block;
        margin: 2rem 0.5rem;
    }
`;

const Footer = () => {
    const { footer } = data;
    const { title, text, bg } = footer[0];
    const { logo, links } = footer[1];
    const { office, street, city } = footer[2];
    const { contact, phone, mail } = footer[3];
    const { social } = footer[4];
    return (
        <StyledFooter>
            <TalkAbout bg={bg}>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div>
                    <button>get in touch</button>
                </div>
            </TalkAbout>
            <Content>
                <Logo>
                    <div>
                        <img src={logo} alt='logo' />
                    </div>
                    <ul>
                        {links.map((link, index) => {
                            const { url, text } = link;
                            return (
                                <li key={index}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </Logo>
                <Info>
                    <Office>
                        <h3>{office}</h3>
                        <p>{street}</p>
                        <p>{city}</p>
                    </Office>
                    <Contact>
                        <h3>{contact}</h3>
                        <p>
                            <a href={`tel:${phone}`}>{phone}</a>
                        </p>
                        <p>
                            <a href={`mailto:${mail}`}>{mail}</a>
                        </p>
                    </Contact>
                    <Social>
                        {social.map((item, index) => {
                            const { url, icon, name } = item;
                            return (
                                <a key={index} href={url}>
                                    <img src={icon} alt={name} />
                                </a>
                            );
                        })}
                    </Social>
                </Info>
            </Content>
        </StyledFooter>
    );
};

export default Footer;
