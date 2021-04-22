import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Section = styled.section`
    height: 100vh;
`;

const AppDesign = () => {
    return (
        <Section>
            <ScrollToTopOnMount />
            <h1>App Design Page</h1>
        </Section>
    );
};

export default AppDesign;
