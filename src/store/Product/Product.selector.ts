import { ApplicationState } from "../store";
import { ProductsState } from "./Product.types";

export const productSelector = (state: ApplicationState): ProductsState => {
  return state.products;
};
