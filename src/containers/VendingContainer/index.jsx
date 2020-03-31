import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { connect } from "react-redux";
import { Window } from "../../components/Window";
import { ControlPanel } from "../../components/ControlPanel";
import {
  getProducts,
  insertMoney,
  showError
} from "../../actions/Machine/Machine";

class VendingContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { status, products, balance, isLoading, error } = this.props.machine;
    return (
      <div className="machine">
        <div className="machine__window">
          <Window products={products} />
        </div>
        <div className="machine__control-panel">
          <ControlPanel
            status={status}
            balance={balance}
            isLoading={isLoading}
            error={error}
            insertMoney={this.props.insertMoney}
            showError={this.props.showError}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    machine: store.machine
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    insertMoney: moneyAmount => dispatch(insertMoney(moneyAmount)),
    showError: message => dispatch(showError(message))
  };
};

VendingContainer.propTypes = {
  machine: PropTypes.shape({
    error: PropTypes.string,
    isLoading: PropTypes.bool,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        category: PropTypes.string,
        brand: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number
      })
    ),
    balance: PropTypes.number,
    status: PropTypes.string
  }),
  getProducts: PropTypes.func,
  insertMoney: PropTypes.func,
  showError: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(VendingContainer);
