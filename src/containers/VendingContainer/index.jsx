import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { WindowComponent } from "../../components/Window";
import { ControlPanelComponent } from "../../components/ControlPanel";

class VendingContainer extends React.Component {
  render() {
    return (
      <div className="machine">
        <div className="machine__window">
          <WindowComponent />
        </div>
        <div className="machine__control-panel"></div>
      </div>
    );
  }
}

export default VendingContainer;
