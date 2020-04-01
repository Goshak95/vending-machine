import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Key } from "../Key";

export const Keypad = ({ data, keyHandler }) => {
  return (
    <div className="keypad">
      {data.map(item => {
        return (
          <div key={item} className="keypad__key">
            <Key value={String(item)} keyHandler={keyHandler} />
          </div>
        );
      })}
    </div>
  );
};

Keypad.propTypes = {
  data: PropTypes.array.isRequired,
  keyHandler: PropTypes.func
};
