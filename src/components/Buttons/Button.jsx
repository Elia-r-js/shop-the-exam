import React from 'react';
import "./Button.css";

export default function Button(props) {
  const {
    handleClick,
    width,
    height,
    title,
    backgroundColor,
    fullwidth,
    borderRadius,
    display,
    ...other
  } = props;

  return (
    <button
      onClick={handleClick}
      className='Buttons'
      style={{
        width: fullwidth ? "100%" : width,
        height,
        backgroundColor,
        borderRadius,
        display,
      }}
      {...other}
    >
      {title}
    </button>
  );
}
