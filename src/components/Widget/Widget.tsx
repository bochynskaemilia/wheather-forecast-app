import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode,
}

const Widget: FC<Props> = ({ children }) => (
  <div className="widget">
    {children}
  </div>
);

export default Widget;
