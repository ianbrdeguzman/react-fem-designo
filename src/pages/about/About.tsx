import React from 'react';
import {
  Section,
  HeroImageWrapper,
  InfoWrapper,
  ClassImageWrapper,
  RealImageWrapper,
  LocationWrapper,
  Button
} from './aboutStyles';
import ScrollToTopOnMount from '../../components/helpers/ScrollToTopOnMount';
import data from './data';

const About = function () {
  const {
    textOne,
    textTwo,
    textThree,
    textFour,
    textFive,
    heroSmall,
    heroMedium,
    heroLarge,
    classSmall,
    classMedium,
    classLarge,
    realSmall,
    realMedium,
    realLarge,
    bgs,
    bgl,
    canadaImage,
    australiaImage,
    ukImage
  } = data;

  return (
    <Section>
      <ScrollToTopOnMount />
      <article>
        <HeroImageWrapper bgs={heroSmall} bgm={heroMedium} bgl={heroLarge} />
        <InfoWrapper bgs={bgs} bgl={bgl}>
          <h2>About Us</h2>
          <p>{textOne}</p>
        </InfoWrapper>
      </article>
      <article>
        <ClassImageWrapper
          bgs={classSmall}
          bgm={classMedium}
          bgl={classLarge}
        />
        <InfoWrapper bgs={bgs} bgl={bgl}>
          <h2>World-Class Talent</h2>
          <p>{textTwo}</p>
          <p>{textThree}</p>
        </InfoWrapper>
      </article>
      <LocationWrapper>
        <div>
          <div>
            <img src={canadaImage} alt="Canada" />
          </div>
          <h2>CANADA</h2>
          <Button to="/locations">SEE LOCATION</Button>
        </div>
        <div>
          <div>
            <img src={australiaImage} alt="Canada" />
          </div>
          <h2>AUSTRALIA</h2>
          <Button to="/locations">SEE LOCATION</Button>
        </div>
        <div>
          <div>
            <img src={ukImage} alt="Canada" />
          </div>
          <h2>UNITED KINGDOM</h2>
          <Button to="/locations">SEE LOCATION</Button>
        </div>
      </LocationWrapper>
      <article>
        <RealImageWrapper bgs={realSmall} bgm={realMedium} bgl={realLarge} />
        <InfoWrapper bgs={bgs} bgl={bgl}>
          <h2>The Real Deal</h2>
          <p>{textFour}</p>
          <p>{textFive}</p>
        </InfoWrapper>
      </article>
    </Section>
  );
};

export default About;
