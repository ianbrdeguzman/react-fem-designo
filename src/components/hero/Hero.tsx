import React from 'react';
import { Section, Button, ImageWrapper } from './heroStyles';
import data from './data';

const Hero = function () {
  const { image, text, title, bg } = data;
  return (
    <Section bg={bg}>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button to="/web-design">learn more</Button>
      </div>
      <ImageWrapper>
        <img src={image} alt="hero" />
      </ImageWrapper>
    </Section>
  );
};

export default Hero;
