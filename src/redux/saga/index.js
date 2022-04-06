import { call, put, takeLeading } from 'redux-saga/effects';
import { getProductsAction, LOAD_PRODUCT, getCommentsAction } from '../redusers/productsReduser';
import { getProductsAPI, getCommentsAPI } from '../../api';
import { loaderHide, loaderShow } from '../redusers/loaderReduser';

export function* workerSagaProducts() {
    const product = yield call(getProductsAPI);
    yield put(getProductsAction(product));
};

export function* workerSagaComments(action) {
    yield put(loaderHide());
    const comment = yield call(getCommentsAPI, action.payload);
    yield put(getCommentsAction(comment));
    yield put(loaderShow());
};

export function* watchSaga() {
    yield takeLeading(LOAD_PRODUCT, workerSagaProducts);
    yield takeLeading("GET_COMME", workerSagaComments);
};

export default function* rootSaga() {
    yield watchSaga();
};
