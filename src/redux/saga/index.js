import { call, put, takeLeading } from 'redux-saga/effects';
import { getProductsAction, LOAD_PRODUCT } from '../redusers/productsReduser';
import { getProductsAPI } from '../../api';

export function* workerSaga() {
    const product = yield call(getProductsAPI);
    yield put(getProductsAction(product));
};

export function* watchSaga() {
    yield takeLeading(LOAD_PRODUCT, workerSaga);
};

export default function* rootSaga() {
    yield watchSaga();
};
