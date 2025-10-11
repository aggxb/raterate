import React from 'react'
import { textColors } from '../../styles/theme';

const Paragraph = ({children, text }) => {
  const textColor = textColors[text] || textColors.c1;

  return (
    <p className={`text-p-m ${textColor} max-md:text-p-s`}>{children}</p>
  )
}

export default Paragraph