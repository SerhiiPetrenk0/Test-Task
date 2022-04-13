import { takeLeading } from 'redux-saga/effects';
import { FILL_USER } from './ducks/userInfoDuck';
import {
    LOAD_PRODUCT, 
    LOAD_COMMENTS,
    FORM_COMMENTS,
} from './ducks/productsDuck';
import { 
    workerSagaFillUser, 
    workerSagaGETProducts, 
    workerSagaGETComments, 
    workerSagaPOSTComments
} from './ducks';

export function* watchSaga() {
    yield takeLeading(LOAD_PRODUCT, workerSagaGETProducts);
    yield takeLeading(LOAD_COMMENTS, workerSagaGETComments);
    yield takeLeading(FORM_COMMENTS, workerSagaPOSTComments);
    yield takeLeading(FILL_USER, workerSagaFillUser);
};

export default function* rootSaga() {
    yield watchSaga();
};
