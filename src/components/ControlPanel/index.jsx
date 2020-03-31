import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { ControlScreen } from "../ControlScreen";
import { PanelInput } from "../PanelInput";
import { Keypad } from "../Keypad";
import { MachineButton } from "../MachineButton";
import { PanelNote } from "../PanelNote";
import { PanelOutput } from "../PanelOutput";
import { availableBanknotes } from "../../constants/defaults";

export const ControlPanel = ({
  status,
  balance,
  isLoading,
  error,
  insertMoney,
  showError
}) => {
  const [moneyValue, setMoneyValue] = useState("");

  const insertMoneyHandler = () => {
    console.log("test");
    if (availableBanknotes.includes(+moneyValue)) {
      insertMoney(moneyValue);
    } else {
      showError("This type on banknotes is not supported.");
    }
    setMoneyValue("");
  };

  return (
    <div className="control-panel">
      <ControlScreen message="Insert money" />
      <div className="control-panel__group">
        <PanelInput
          name="price"
          placeholder=">"
          useValue={setMoneyValue}
          value={moneyValue}
        />
        <MachineButton text="Insert" action={insertMoneyHandler} />
      </div>
      <PanelNote title="Available banknotes: 50, 100, 200, 500 or 1000 R." />
      <Keypad data={[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"]} />
      <MachineButton text="Confirm product number" />
      <PanelNote title="Don't forget to take your change:" />
      <div className="control-panel__group">
        <PanelOutput />
        <MachineButton text="Take change" />
      </div>
    </div>
  );
};
