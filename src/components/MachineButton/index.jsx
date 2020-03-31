import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const MachineButton = ({ text }) => {
  return <button className="machine-button">{text}</button>;
};

MachineButton.propTypes = {
  text: PropTypes.string.isRequired
};
