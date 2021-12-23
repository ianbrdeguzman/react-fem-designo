import React from 'react';
import Article from './featureStyles';

interface IProps {
  image: string;
  title: string;
  text: string;
}

const Feature = function ({ image, title, text }: IProps) {
  return (
    <Article>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Article>
  );
};

export default Feature;
