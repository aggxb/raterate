import React from 'react';
import { textColors, bgColors } from '../../styles/theme';

const Button = ({ children, bg, text, onClick }) => {
  const textColor = textColors[text] || textColors.c1;
  const bgColor = bgColors[bg] || bgColors.c6;

  return (
    <button type='button' onClick={onClick} className={`py-2 px-3 rounded-md size-fit text-button ${textColor} ${bgColor}`}>{children}</button>
  );
};

export default Button;
