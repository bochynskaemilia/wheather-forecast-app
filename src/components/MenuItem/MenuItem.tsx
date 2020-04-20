import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export interface MenuItemProps {
  label: string;
  link: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, link }) => (
  <div className="menu-item">
    <Link className="menu-item__link" to={link}>{label}</Link>
  </div>
);

export default MenuItem;
