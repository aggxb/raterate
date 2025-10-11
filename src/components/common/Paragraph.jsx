import React from 'react';
import { textColors } from '../../styles/theme';

const Paragraph = ({ children, text, font }) => {
  const typeFont = font || 'text-paragraph';
  const textColor = textColors[text] || textColors.c1;

  return <p className={`${typeFont} ${textColor}`}>{children}</p>
};

export default Paragraph;
