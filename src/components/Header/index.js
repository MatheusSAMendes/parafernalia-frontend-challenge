import React from 'react';

import { TopBar, Title } from './index.styled';

const Header = ({ children }) => (
  <TopBar>
    <Title>YouTube Player</Title>
    {children}
    </TopBar>
);

export default Header;