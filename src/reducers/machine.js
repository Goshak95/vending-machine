import * as t from "../actions/Machine/types";

export const initialState = {
  error: null,
  isLoading: false,
  products: [],
  balance: 0,
  state: "initial"
};

export function MachineReducer(state = initialState, action) {
  switch (action.type) {
    case t.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case t.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isLoading: false };
    case t.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
