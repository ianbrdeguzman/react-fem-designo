import React from 'react';
import Section from './featureListStyles';
import Feature from '../feature/Feature';
import data from './data';

const FeatureList = function () {
  return (
    <Section>
      {data.map(({ image, title, text }) => {
        return <Feature key={text} image={image} title={title} text={text} />;
      })}
    </Section>
  );
};

export default FeatureList;
