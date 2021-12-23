import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledFooter,
  TalkAbout,
  Content,
  Logo,
  Info,
  Office,
  Contact,
  Social,
  Button
} from './footerStyles';
import data from './data';

const Footer = function () {
  const { title, text: description, bg, bgs, bgm, bgl } = data[0];
  const { logo, links } = data[1];
  const { office, street, city } = data[2];
  const { contact, phone, mail } = data[3];
  const { social } = data[4];
  return (
    <StyledFooter>
      <TalkAbout bg={bg} bgs={bgs} bgm={bgm} bgl={bgl}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <Button to="/contact">get in touch</Button>
        </div>
      </TalkAbout>
      <Content>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul>
            {links?.map((link) => {
              const { url, text, route } = link;
              return (
                <li key={text}>
                  <Link to={route} href={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Logo>
        <Info>
          <Office>
            <h3>{office}</h3>
            <p>{street}</p>
            <p>{city}</p>
          </Office>
          <Contact>
            <h3>{contact}</h3>
            <p>
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <a href={`mailto:${mail}`}>{mail}</a>
            </p>
          </Contact>
          <Social>
            {social?.map((item) => {
              const { url, icon, name } = item;
              return (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={name} />
                </a>
              );
            })}
          </Social>
        </Info>
      </Content>
    </StyledFooter>
  );
};

export default Footer;
