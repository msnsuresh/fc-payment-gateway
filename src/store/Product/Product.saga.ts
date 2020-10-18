import { AxiosResponse } from "axios";
import {
  all,
  AllEffect,
  call,
  CallEffect,
  fork,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";
import API from "../../utils/API";
import { errorProducts, getOkProducts } from "./Product.actions";
import {
  GetErrorProductActionType,
  GetOkProductsActionType,
  ProductActionTypes,
} from "./Product.types";

async function getProducts(): Promise<AxiosResponse> {
  return API.get("/recipe.json");
}

function* handleGetProducts(): IterableIterator<
  CallEffect | PutEffect<GetOkProductsActionType | GetErrorProductActionType>
> {
  try {
    const response: AxiosResponse = yield call(getProducts);
    if (response.status === 200) {
      yield put(getOkProducts(response.data));
    } else {
      yield put(errorProducts("error"));
    }
  } catch (error) {
    yield put(errorProducts("error"));
  }
}

function* watchProduct(): IterableIterator<ForkEffect> {
  yield takeEvery(ProductActionTypes.GET_PRODUCTS, handleGetProducts);
}

function* ProductSaga(): IterableIterator<AllEffect<ForkEffect>> {
  yield all([fork(watchProduct)]);
}

export default ProductSaga;
