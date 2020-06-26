import React from 'react';
import { AppHeader, AppLogo } from './Header.style';

export const Header = ({ logo }) => (
  <AppHeader>
    <AppLogo src={logo} alt="logo" />
  </AppHeader>
);
