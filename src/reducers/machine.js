import * as t from "../actions/Machine/types";

export const initialState = {
  error: null,
  isLoading: false,
  products: [],
  balance: 0,
  status: "initial"
};

export function MachineReducer(state = initialState, action) {
  switch (action.type) {
    case t.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case t.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isLoading: false };
    case t.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case t.INSERT_MONEY: {
      const newBalance = +state.balance + +action.payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        balance: newBalance,
        status: "active"
      };
    }
    case t.SHOW_ERROR: {
      return { ...state, error: action.payload, status: "error" };
    }
    default:
      return state;
  }
}
