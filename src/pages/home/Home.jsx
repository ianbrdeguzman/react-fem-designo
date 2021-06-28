import React from 'react';
import Hero from '../../components/hero/Hero';
import ProjectList from '../../components/project-list/ProjectList';
import FeatureList from '../../components/feature-list/FeatureList';
import ScrollToTopOnMount from '../../components/helpers/ScrollToTopOnMount';

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
