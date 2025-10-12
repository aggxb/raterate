import React from 'react';
import { textColors, bgColors } from '../../styles/theme';

const Button = ({ children, bg, text, className, onClick }) => {
  const textColor = textColors[text] || textColors.c1;
  const bgColor = bgColors[bg] || bgColors.c6;
  const finalClass = `py-2 px-3 rounded-md size-fit cursor-pointer text-button ${textColor} ${bgColor} ${className || ''}`

  return (
    <button
      type="button"
      onClick={onClick}
      className={finalClass}
    >
      {children}
    </button>
  );
};

export default Button;
