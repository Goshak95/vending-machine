import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const PanelNote = ({ title }) => {
  return <p className="panel-note">{title}</p>;
};

PanelNote.propTypes = {
  title: PropTypes.string.isRequired
};
