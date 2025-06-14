import React from 'react';
import "./Button.css";

export default function Button(props) {
  const {
    handleClick,
    alignItems,
    width,
    height,
    title,
    backgroundColor,
    fullwidth,
    borderRadius,
    justifyContent,
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
        alignItems,
        backgroundColor,
        justifyContent,
        borderRadius,
        display,
      }}
      {...other}
    >
      {title}
    </button>
  );
}
