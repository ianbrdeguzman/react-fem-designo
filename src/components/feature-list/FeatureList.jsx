import React from 'react';
import { Section } from './featureListStyles'
import Feature from '../feature/Feature';
import { data } from './data';

const FeatureList = () => {
    return (
        <Section>
            {data.map((feature, index) => {
                return <Feature key={index} {...feature} />;
            })}
        </Section>
    );
};

export default FeatureList;
