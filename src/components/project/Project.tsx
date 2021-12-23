import React from 'react';
import Article from './projectStyles';

interface IProps {
  text: string;
  icon: string;
  bgs: string;
  bgm: string;
  bgl: string;
  route: string;
}

const Project = function ({ text, icon, bgs, bgm, bgl, route }: IProps) {
  return (
    <Article to={route} bgs={bgs} bgm={bgm} bgl={bgl}>
      <div>
        <h2>{text} design</h2>
        <p>
          view projects <img src={icon} alt="arrow" />
        </p>
      </div>
    </Article>
  );
};

export default Project;
