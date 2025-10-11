import React from 'react';
import { textColors } from '../../styles/theme';

const Subtitle = ({ children, text, font, component }) => {
  const Component = component || 'h2';
  const typeFont = font || 'text-subtitle';
  const textColor = textColors[text] || textColors.c2;

  return (
    <Component className={`${typeFont} ${textColor}`}>{children}</Component>
  );
};

export default Subtitle;
