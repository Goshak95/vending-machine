import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const Key = ({ value }) => {
  return <button className="key">{value}</button>;
};

Key.propTypes = {
  value: PropTypes.string.isRequired
};
