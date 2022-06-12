import React from "react";

const Input = ({ id, label, name, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-900 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
