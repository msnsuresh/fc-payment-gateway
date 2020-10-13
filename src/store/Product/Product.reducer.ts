import { Reducer } from "redux";
import { ProductActionTypes, ProductsState } from "./Product.types";

const initialState: ProductsState = {
  loading: false,
  error: "",
  products: [],
};

const reducer: Reducer<ProductsState> = (
  state: ProductsState = initialState,
  action
) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case ProductActionTypes.GET_OK_PRODUCTS: {
      return {
        ...state,
        loading: false,
        error: "",
        products: action.payload,
      };
    }
    case ProductActionTypes.ERROR_PRODUCTS: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export { reducer as ProductReducer };
