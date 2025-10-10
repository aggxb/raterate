import React from 'react'

const Paragraph = ({children, color, font }) => {
  const textFont;
  const textColor;

  return (
    <p className={`${textFont} ${textColor}`}>{children}</p>
  )
}

export default Paragraph