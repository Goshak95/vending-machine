import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const PanelInput = ({ name, placeholder }) => {
  return (
    <input
      className="panel-input"
      type="text"
      name={name}
      placeholder={placeholder}
    />
  );
};

PanelInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};
