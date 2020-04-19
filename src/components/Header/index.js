import React from 'react';

import { TopBar } from './index.styled';

const Header = ({ children }) => (
  <TopBar>{children}</TopBar>
);

export default Header;