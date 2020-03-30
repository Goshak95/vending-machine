import React from "react";
import "./App.scss";
import VendingContainer from "./containers/VendingContainer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <VendingContainer />
      </div>
    );
  }
}

export default App;
