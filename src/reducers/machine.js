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
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        status: "error"
      };
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
    case t.BUY_PRODUCT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case t.BUY_PRODUCT_SUCCESS: {
      const updatedProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
      const newBalance = +state.balance - +action.payload.price;
      return {
        ...state,
        products: updatedProducts,
        error: null,
        isLoading: false,
        status: "active",
        balance: newBalance
      };
    }
    case t.BUY_LAST_PRODUCT_REQUEST:
      return { ...state, isLoading: true, error: null };
    case t.BUY_LAST_PRODUCTS_SUCCESS: {
      const filteredProducts = state.products.filter(
        product => product.id !== action.payload.id
      );
      const newBalance = +state.balance - +action.payload.price;
      return {
        ...state,
        error: null,
        isLoading: false,
        status: "active",
        products: filteredProducts,
        balance: newBalance
      };
    }
    case t.BUY_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        status: "error"
      };
    default:
      return state;
  }
}
