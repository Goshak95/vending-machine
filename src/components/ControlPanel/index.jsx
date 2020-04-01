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
  products,
  status,
  balance,
  isLoading,
  error,
  insertMoney,
  showError,
  buyProduct
}) => {
  const [moneyValue, setMoneyValue] = useState("");
  const [productNumber, setProductNumber] = useState("");

  const insertMoneyHandler = () => {
    console.log("test");
    if (availableBanknotes.includes(+moneyValue)) {
      insertMoney(moneyValue);
    } else {
      showError("This type on banknotes is not supported.");
    }
    setMoneyValue("");
  };

  const generateScreenMessage = () => {
    let message = "";
    switch (status) {
      case "active":
        message = `Balance: ${balance}`;
        break;
      case "error":
        message = `Error: ${error}`;
        break;
      case "initial":
      default:
        message = "Insert money";
    }

    message = productNumber ? `Product: ${productNumber}` : message;
    return isLoading ? "Loading..." : message;
  };

  const buyProductHandler = () => {
    console.log("Buy!");
    const product = products.find(
      product => product.catNumber === +productNumber
    );
    if (!product) {
      setProductNumber("");
      showError("Wrong product number");
      return;
    }

    if (balance < product.price) {
      setProductNumber("");
      showError("Not enough money");
      return;
    }

    buyProduct(product);
    setProductNumber("");
  };

  return (
    <div className="control-panel">
      <ControlScreen message={generateScreenMessage()} />
      <div className="control-panel__group">
        <PanelInput
          name="price"
          placeholder=">"
          useValue={setMoneyValue}
          value={moneyValue}
        />
        <MachineButton text="Insert" action={insertMoneyHandler} />
      </div>
      <PanelNote title="Available banknotes: 50, 100, 200, 500 ₽" />
      <Keypad
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"]}
        keyHandler={value => setProductNumber(productNumber + value)}
      />
      <MachineButton text="Confirm product number" action={buyProductHandler} />
      <PanelNote title="Don't forget to take your change:" />
      <div className="control-panel__group">
        <PanelOutput />
        <MachineButton text="Take change" />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      brand: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      catNumber: PropTypes.number
    })
  ),
  status: PropTypes.string,
  balance: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  insertMoney: PropTypes.func,
  showError: PropTypes.func,
  buyProduct: PropTypes.func
};
