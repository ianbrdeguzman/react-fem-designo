import React from 'react';
import styled from 'styled-components';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Section = styled.section`
    height: 100vh;
`;

const GraphicDesign = () => {
    return (
        <Section>
            <ScrollToTopOnMount />
            <h1>Graphic Design Page</h1>
        </Section>
    );
};

export default GraphicDesign;
