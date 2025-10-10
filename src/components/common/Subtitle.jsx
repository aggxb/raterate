import React from 'react';

const Subtitle = ({ children, color, font, Component = 'h2' }) => {
  const colors = {
    c1: 'text-c1blue',
    c2: 'text-c2blue',
    c3: 'text-c3blue',
    c4: 'text-c4blue',
    c5: 'text-c5blue',
    c6: 'text-c6blue',
    green: 'text-green',
    yellow: 'text-yellow',
    red: 'text-red',
  };

  const fonts = {
    subtitle: 'text-h2-l max-md:text-h2-s',
    subtitleInfo: 'text-h3-m max-md:text-h3-s',
  };

  const fontSize = fonts[font] || fonts.subtitle;
  const textColor = colors[color] || colors.c2;

  return (
    <Component className={`${fontSize} ${textColor}`}>{children}</Component>
  );
};

export default Subtitle;
