import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const PanelOutput = ({ message }) => {
  return <div className="panel-output">{message}</div>;
};

PanelOutput.propTypes = {
  message: PropTypes.string
};
