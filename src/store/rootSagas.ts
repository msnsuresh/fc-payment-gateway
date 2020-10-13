import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";
import ProductSaga from "./Product/Product.saga";

export function* rootSagas(): IterableIterator<AllEffect<ForkEffect>> {
  yield all([fork(ProductSaga)]);
}
