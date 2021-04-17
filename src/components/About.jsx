import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Section = styled.section`
    height: 100vh;
`;

const About = () => {
    return (
        <Section>
            <ScrollToTopOnMount />
            <h1>About Page</h1>
        </Section>
    );
};

export default About;
