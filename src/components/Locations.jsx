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
`;

const CaImageWrapper = styled.div`
    width: 100%;
    height: 326px;
    background-image: url(${(props) => props.bgm});
    @media ${device.desktop} {
        background-image: url(${(props) => props.bgl});
    }
`;
const AuImageWrapper = styled.div`
    width: 100%;
    height: 326px;
    background-image: url(${(props) => props.bgm});
    @media ${device.desktop} {
        background-image: url(${(props) => props.bgl});
    }
`;
const UkImageWrapper = styled.div`
    width: 100%;
    height: 326px;
    background-image: url(${(props) => props.bgm});
    @media ${device.desktop} {
        background-image: url(${(props) => props.bgl});
    }
`;

const Locations = () => {
    const {
        office: CaOffice,
        street: CaStreet,
        city: CaCity,
        phone: CaPhone,
        mail: CaMail,
        bgm: CaBgm,
        bgl: CaBgl,
    } = data.location[0];
    const {
        office: AuOffice,
        street: AuStreet,
        city: AuCity,
        phone: AuPhone,
        mail: AuMail,
        bgm: AuBgm,
        bgl: AuBgl,
    } = data.location[1];
    const {
        office: UkOffice,
        street: UkStreet,
        city: UkCity,
        phone: UkPhone,
        mail: UkMail,
        bgm: UkBgm,
        bgl: UkBgl,
    } = data.location[2];
    return (
        <Section>
            <ScrollToTopOnMount />
            <article>
                <div>
                    <h2>Canada</h2>
                    <div>
                        <div>
                            <h3>{CaOffice}</h3>
                            <p>{CaStreet}</p>
                            <p>{CaCity}</p>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <p>
                                <a href={`tel:${CaPhone}`}>{CaPhone}</a>
                            </p>
                            <p>
                                <a href={`mailto:${CaMail}`}>{CaMail}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <CaImageWrapper bgm={CaBgm} bgl={CaBgl} />
            </article>
            <article>
                <div>
                    <h2>Australia</h2>
                    <div>
                        <div>
                            <h3>{AuOffice}</h3>
                            <p>{AuStreet}</p>
                            <p>{AuCity}</p>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <p>
                                <a href={`tel:${AuPhone}`}>{AuPhone}</a>
                            </p>
                            <p>
                                <a href={`mailto:${AuMail}`}>{AuMail}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <AuImageWrapper bgm={AuBgm} bgl={AuBgl} />
            </article>
            <article>
                <div>
                    <h2>United Kingdom</h2>
                    <div>
                        <div>
                            <h3>{UkOffice}</h3>
                            <p>{UkStreet}</p>
                            <p>{UkCity}</p>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <p>
                                <a href={`tel:${UkPhone}`}>{UkPhone}</a>
                            </p>
                            <p>
                                <a href={`mailto:${UkMail}`}>{UkMail}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <UkImageWrapper bgm={UkBgm} bgl={UkBgl} />
            </article>
        </Section>
    );
};

export default Locations;
