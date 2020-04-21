import React, { FC } from 'react';
import Error from './Error';

interface Props {
  message: String,
}

const ErrorModal: FC<Props> = ({ message }) => (
  <div className="error-overlay">
    <div className="error-modal">
      <Error message={message} />
    </div>
  </div>
);

export default ErrorModal;
