import React from "react";

const Button = ({
  text,
  bgColor,
  textColor,
  hoverColor,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={`${bgColor} ${hoverColor} ${textColor} font-bold py-2 px-4 rounded`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
