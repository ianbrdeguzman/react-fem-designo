import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Section = styled.section`
    article:last-child {
        margin: 4rem 0 20rem 0;
    }
`;

const CaImageWrapper = styled.div`
    width: 100%;
    height: 326px;
    border: 1px solid red;
`;
const AuImageWrapper = styled.div`
    width: 100%;
    height: 326px;
    border: 1px solid red;
`;
const UkImageWrapper = styled.div`
    width: 100%;
    height: 326px;
    border: 1px solid red;
`;

const Locations = () => {
    return (
        <Section>
            <ScrollToTopOnMount />
            <article>
                <div></div>
                <CaImageWrapper />
            </article>
            <article>
                <div></div>
                <AuImageWrapper />
            </article>
            <article>
                <div></div>
                <UkImageWrapper />
            </article>
        </Section>
    );
};

export default Locations;
