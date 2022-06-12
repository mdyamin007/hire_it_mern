import React from "react";

const Button = ({ text, bgColor, textColor, hoverColor }) => {
  return (
    <button
      className={`${bgColor} ${hoverColor} ${textColor} font-bold py-2 px-4 rounded`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
