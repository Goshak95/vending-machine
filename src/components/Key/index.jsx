import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const Key = ({ value, keyHandler }) => {
  const onClickHandler = () => {
    console.log(value);
    keyHandler(value);
  };
  return (
    <button className="key" onClick={onClickHandler}>
      {value}
    </button>
  );
};

Key.propTypes = {
  value: PropTypes.string.isRequired,
  keyHandler: PropTypes.func
};
