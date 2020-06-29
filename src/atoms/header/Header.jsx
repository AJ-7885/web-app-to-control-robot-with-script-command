import React from 'react';
import { AppHeader, AppLogo } from './Header.style';

// eslint-disable-next-line react/prop-types
export const Header = ({ logo }) => (
  <AppHeader>{logo && <AppLogo src={logo} alt="logo" />}</AppHeader>
);
