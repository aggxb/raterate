import React from 'react';

const Title = ({ children, className }) => {
  const finalClass = `text-title text-c2blue ${className || ''}`;

  return <h1 className={finalClass}>{children}</h1>
};

export default Title;
