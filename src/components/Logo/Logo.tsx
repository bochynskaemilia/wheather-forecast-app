import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';

const Logo: FC = () => (
  <Link className="logo" to={paths.root}>
    <FontAwesomeIcon className="logo__icon" icon="sun" />
    <h1 className="logo__caption">Weather Forecasts</h1>
  </Link>
);

export default Logo;
