import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Autocomplete from '../Autocomplete/Autocomplete';
import Weather from '../Weather/Weather';

const Header: FC = () => (
  <div className="header-image">
    <div className="header">
      <div className="header__left">
        <Logo />
        <Menu />
      </div>
      <div className="header__right">
        <Weather />
        <Autocomplete />
      </div>
    </div>
  </div>
);

export default Header;
