import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const ControlScreen = ({ message }) => {
  return <div className="control-screen">{message}</div>;
};

ControlScreen.propTypes = {
  message: PropTypes.string.isRequired
};
