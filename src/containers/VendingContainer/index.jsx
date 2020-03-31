import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { Window } from "../../components/Window";
import { ControlPanel } from "../../components/ControlPanel";

class VendingContainer extends React.Component {
  render() {
    return (
      <div className="machine">
        <div className="machine__window">
          <Window />
        </div>
        <div className="machine__control-panel">
          <ControlPanel />
        </div>
      </div>
    );
  }
}

export default VendingContainer;
