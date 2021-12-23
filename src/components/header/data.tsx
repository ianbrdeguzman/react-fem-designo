import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoDark from '../../assets/shared/desktop/logo-dark.png';

const data = {
  logo: logoDark,
  open: <FaBars />,
  close: <FaTimes />,
  navbar: [
    {
      url: '/',
      text: 'our company',
      route: '/about'
    },
    {
      url: '/',
      text: 'locations',
      route: '/locations'
    },
    {
      url: '/',
      text: 'contact',
      route: '/contact'
    }
  ]
};

export default data;
