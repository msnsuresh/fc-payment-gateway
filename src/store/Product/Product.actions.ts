import { action } from "typesafe-actions";
import {
  GetErrorProductActionType,
  GetOkProductsActionType,
  GetProductsActionType,
  Product,
  ProductActionTypes,
} from "./Product.types";

export const getProducts = (): GetProductsActionType =>
  action(ProductActionTypes.GET_PRODUCTS);

export const getOkProducts = (products: Product[]): GetOkProductsActionType =>
  action(ProductActionTypes.GET_OK_PRODUCTS, products);

export const errorProducts = (error: string): GetErrorProductActionType =>
  action(ProductActionTypes.ERROR_PRODUCTS, error);
