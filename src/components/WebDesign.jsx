import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Section = styled.section`
    height: 100vh;
`;

const WebDesign = () => {
    return (
        <Section>
            <ScrollToTopOnMount />
            <h1>Web Design Page</h1>
        </Section>
    );
};

export default WebDesign;
