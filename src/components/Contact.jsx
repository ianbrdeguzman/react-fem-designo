import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Section = styled.section`
    height: 100vh;
`;

const Contact = () => {
    return (
        <Section>
            <ScrollToTopOnMount />
            <h1>Contact Us Page</h1>
        </Section>
    );
};

export default Contact;
