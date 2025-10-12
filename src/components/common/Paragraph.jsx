import React from 'react';
import { textColors } from '../../styles/theme';

const Paragraph = ({ children, text, font, className }) => {
  const typeFont = font || 'text-paragraph';
  const textColor = textColors[text] || textColors.c1;
  const finalClass = `${typeFont} ${textColor} ${className || ''}`

  return <p className={finalClass}>{children}</p>
};

export default Paragraph;
