import React from 'react';
import { textColors, fonts } from '../../styles/theme';

const Subtitle = ({ children, text, font, Component = 'h2' }) => {
  const fontSize = fonts[font] || fonts.subtitle;
  const textColor = textColors[text] || textColors.c2;

  return (
    <Component className={`${fontSize} ${textColor}`}>{children}</Component>
  );
};

export default Subtitle;
