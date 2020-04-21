import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface MenuItemProps {
  label: string;
  link: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, link }) => {
  const location = useLocation();

  const isFocused = location.pathname === link ? '--focused' : '';

  return (
    <div className="menu-item">
      <Link
        className={`menu-item__link menu-item__link${isFocused}`}
        to={link}
      >
        {label}
      </Link>
    </div>
  );
};

export default MenuItem;
