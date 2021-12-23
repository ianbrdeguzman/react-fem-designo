import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, Nav } from './headerStyles';
import data from './data';

const Header = function () {
  const { logo, open, close, navbar } = data;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button type="button" onClick={handleClick}>
        {isOpen ? close : open}
      </button>
      <Nav isOpen={isOpen}>
        <ul>
          {navbar.map((link) => {
            const { url, text, route } = link;
            return (
              <li key={text}>
                <Link to={route} href={url} onClick={handleClick}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
