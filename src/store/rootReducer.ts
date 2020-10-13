import { combineReducers } from "redux";
import { ProductReducer } from "./Product/Product.reducer";

export default combineReducers({
  products: ProductReducer,
});
