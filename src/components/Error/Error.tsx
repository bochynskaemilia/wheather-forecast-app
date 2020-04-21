import React, { FC, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  message: String,
}

const Error: FC<Props> = ({ message }) => {
  const handleRefresh = useCallback(
    () => {
      window.location.reload();
    },
    [],
  );

  return (
    <div className="error">
      <div>
        <FontAwesomeIcon className="error__icon" icon="exclamation-circle" />
        <span className="error__message">{message}</span>
      </div>
      <FontAwesomeIcon
        onClick={handleRefresh}
        className="error__refresh"
        icon="redo"
      />
    </div>
  );
};

export default Error;
