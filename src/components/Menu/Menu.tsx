import React, { FC } from 'react';
import paths from '../../constants/paths';
import MenuItem, { MenuItemProps } from '../MenuItem/MenuItem';

const menuItems = [
  {
    label: 'daily forecast',
    link: paths.root,
  },
  {
    label: '10 days forecast',
    link: paths.longTermForecast,
  },
] as MenuItemProps[];

const Menu: FC = () => (
  <div className="menu flex-container">
    {
      menuItems.map((item) => <MenuItem key={item.label} label={item.label} link={item.link} />)
    }
  </div>
);

export default Menu;
