import React from 'react';
import { colors, fonts } from '../../styles/theme';

const Subtitle = ({ children, color, font, Component = 'h2' }) => {
  const fontSize = fonts[font] || fonts.subtitle;
  const textColor = colors[color] || colors.c2;

  return (
    <Component className={`${fontSize} ${textColor}`}>{children}</Component>
  );
};

export default Subtitle;
