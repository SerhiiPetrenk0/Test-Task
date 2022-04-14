import { takeLeading } from 'redux-saga/effects';
import { FILL_USER } from './ducks/userInfoDuck';
import {
    LOAD_PRODUCT, 
    LOAD_COMMENTS,
    FORM_COMMENTS,
} from './ducks/productsDuck';
import * as Worker from './ducks'

export function* watchSaga() {
    yield takeLeading(LOAD_PRODUCT, Worker.SagaGETProducts);
    yield takeLeading(LOAD_COMMENTS, Worker.SagaGETComments);
    yield takeLeading(FORM_COMMENTS, Worker.SagaPOSTComments);
    yield takeLeading(FILL_USER, Worker.SagaFillUser);
};

export default function* rootSaga() {
    yield watchSaga();
};
