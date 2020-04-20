import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo: FC = () => (
  <div className="logo">
    <FontAwesomeIcon className="logo__icon" icon="sun" />
    <h1 className="logo__caption">Weather Forecasts</h1>
  </div>
);

export default Logo;
