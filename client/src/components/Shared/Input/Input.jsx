import React from "react";
// import PropTypes from "prop-types";

const Input = ({ type, className, id, name, value, onChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// Input.propTypes = {};

export default Input;
