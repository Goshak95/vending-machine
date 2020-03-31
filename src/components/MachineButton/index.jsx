import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const MachineButton = ({ text, action }) => {
  return (
    <button className="machine-button" onClick={action}>
      {text}
    </button>
  );
};

MachineButton.propTypes = {
  text: PropTypes.string.isRequired
};
