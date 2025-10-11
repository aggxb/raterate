import React from 'react'
import { colors } from '../../styles/theme';

const Paragraph = ({children, color }) => {
  const textColor = colors[color] || colors.c1;

  return (
    <p className={`text-p-m ${textColor} max-md:text-p-s`}>{children}</p>
  )
}

export default Paragraph