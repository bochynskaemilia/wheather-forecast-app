import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const Header: FC = () => (
  <div className="header">
    <Logo />
    <Menu />
  </div>
);

export default Header;
