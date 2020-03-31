import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Key } from "../Key";

export const Keypad = ({ data }) => {
  return (
    <div className="keypad">
      {data.map(item => {
        return (
          <div key={item} className="keypad__key">
            <Key value={String(item)} />
          </div>
        );
      })}
    </div>
  );
};

Keypad.propTypes = {
  data: PropTypes.array.isRequired
};
