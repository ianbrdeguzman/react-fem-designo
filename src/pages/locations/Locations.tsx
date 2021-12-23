import React from 'react';
import { Section, InfoWrapper, ImageWrapper } from './locationStyles';
import ScrollToTopOnMount from '../../components/helpers/ScrollToTopOnMount';
import Map from '../../components/map/Map';
import data, { IData } from './data';

const Locations = function () {
  return (
    <Section>
      <ScrollToTopOnMount />
      {data.map((item) => {
        const { country, office, street, city, phone, mail, circleBg, loc } =
          item as IData;
        return (
          <article key={country}>
            <InfoWrapper bg={circleBg}>
              <h2>{country}</h2>
              <div>
                <div>
                  <h3>{office}</h3>
                  <p>{street}</p>
                  <p>{city}</p>
                </div>
                <div>
                  <h3>Contact</h3>
                  <p>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </p>
                  <p>
                    <a href={`mailto:${mail}`}>{mail}</a>
                  </p>
                </div>
              </div>
            </InfoWrapper>
            <ImageWrapper>
              <Map loc={loc} office={office} street={street} city={city} />
            </ImageWrapper>
          </article>
        );
      })}
    </Section>
  );
};

export default Locations;
