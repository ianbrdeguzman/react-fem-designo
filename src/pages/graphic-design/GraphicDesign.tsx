import React from 'react';
import {
  Hero,
  Projects,
  ImageWrapper,
  InfoWrapper,
  Section
} from './graphicDesignStyles';
import ScrollToTopOnMount from '../../components/helpers/ScrollToTopOnMount';
import Project from '../../components/project/Project';
import data from './data';

const GraphicDesign = function () {
  const { bg, designs, projects, text: description } = data;
  return (
    <section>
      <ScrollToTopOnMount />
      <Hero bg={bg}>
        <h1>App Design</h1>
        <p>{description}</p>
      </Hero>
      <Projects>
        {designs.map((project) => {
          const { image, text, title } = project;
          return (
            <article key={text}>
              <ImageWrapper>
                <img src={image} alt={title} />
              </ImageWrapper>
              <InfoWrapper>
                <h2>{title}</h2>
                <p>{text}</p>
              </InfoWrapper>
            </article>
          );
        })}
      </Projects>
      <Section>
        {projects.map((project) => {
          const { text, icon, bgS, bgM, bgL, route } = project;
          return (
            <Project
              key={text}
              text={text}
              icon={icon}
              bgs={bgS}
              bgm={bgM}
              bgl={bgL}
              route={route}
            />
          );
        })}
      </Section>
    </section>
  );
};

export default GraphicDesign;
