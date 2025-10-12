import React from 'react';
import { textColors } from '../../styles/theme';

const Subtitle = ({ children, text, font, className, component }) => {
  const Component = component || 'h2';
  const typeFont = font || 'text-subtitle';
  const textColor = textColors[text] || textColors.c2;
  const finalClass = `${typeFont} ${textColor} ${className || ''}`;

  return <Component className={finalClass}>{children}</Component>
};

export default Subtitle;
