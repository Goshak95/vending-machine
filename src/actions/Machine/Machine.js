import * as t from "./types";
import { API_ROOT } from "../../constants/defaults";

export function getProducts() {
  return dispatch => {
    dispatch({
      type: t.GET_PRODUCTS_REQUEST
    });

    return fetch(`${API_ROOT}/products`)
      .then(response => response.json())
      .then(data => dispatch({ type: t.GET_PRODUCTS_SUCCESS, payload: data }))
      .catch(error =>
        dispatch({ type: t.GET_PRODUCTS_FAILURE, payload: error.message })
      );
  };
}

export function insertMoney(moneyAmount) {
  return {
    type: t.INSERT_MONEY,
    payload: moneyAmount
  };
}

export function showError(message) {
  return {
    type: t.SHOW_ERROR,
    payload: message
  };
}

export function buyProduct(product) {
  if (product.quantity == 1) {
    return dispatch => {
      dispatch({
        type: t.BUY_LAST_PRODUCT_REQUEST
      });

      return fetch(`${API_ROOT}/products/${product.id}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(data =>
          dispatch({ type: t.BUY_LAST_PRODUCT_SUCCESS, payload: data })
        )
        .catch(error =>
          dispatch({ type: t.BUY_LAST_PRODUCT_FAILURE, payload: error.message })
        );
    };
  } else {
    product.quantity -= 1;

    return dispatch => {
      dispatch({
        type: t.BUY_PRODUCT_REQUEST
      });

      return fetch(`${API_ROOT}/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(product)
      })
        .then(response => response.json())
        .then(data => dispatch({ type: t.BUY_PRODUCT_SUCCESS, payload: data }))
        .catch(error =>
          dispatch({ type: t.BUY_PRODUCT_FAILURE, payload: error.message })
        );
    };
  }
}
