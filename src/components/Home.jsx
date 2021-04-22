import React from 'react';
import Hero from './Hero';
import ProjectList from './ProjectList';
import FeatureList from './FeatureList';
import ScrollToTopOnMount from './ScrollToTopOnMount';

const Home = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Hero />
            <ProjectList />
            <FeatureList />
        </>
    );
};

export default Home;
