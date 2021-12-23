import React from 'react';
import Section from './projectListStyles';
import Project from '../project/Project';
import data from './data';

const ProjectList = function () {
  return (
    <Section>
      {data.map((project) => {
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
  );
};

export default ProjectList;
