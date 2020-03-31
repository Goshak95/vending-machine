import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const PanelInput = ({ name, placeholder, value, useValue }) => {
  const onChangeHandler = e => {
    useValue(e.target.value);
  };

  return (
    <input
      className="panel-input"
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

PanelInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  useValue: PropTypes.func
};
