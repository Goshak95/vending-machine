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
