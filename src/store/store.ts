import { applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { ProductsState } from "./Product/Product.types";
import rootReducer from "./rootReducer";
import { rootSagas } from "./rootSagas";

export interface ApplicationState {
  products: ProductsState;
}

export default function configureStore(): Store {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSagas);
  return store;
}
