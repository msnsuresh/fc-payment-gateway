export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
}

export interface ProductsState {
  loading: boolean;
  error: string;
  products: Product[];
}

export enum ProductActionTypes {
  GET_PRODUCTS = "@@PRODUCTS/GET",
  GET_OK_PRODUCTS = "@@PRODUCTS/GET_OK",
  ERROR_PRODUCTS = "@@PRODUCTS/ERROR",
}

export interface GetProductsActionType {
  type: ProductActionTypes.GET_PRODUCTS;
}

export interface GetOkProductsActionType {
  type: ProductActionTypes.GET_OK_PRODUCTS;
  payload: Product[];
}

export interface GetErrorProductActionType {
  type: ProductActionTypes.ERROR_PRODUCTS;
  payload: string;
}
