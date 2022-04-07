import { call, put, takeLeading } from 'redux-saga/effects';
import { 
    getProductsAction, 
    LOAD_PRODUCT, 
    LOAD_COMMENTS, 
    postCommentAction, 
    FORM_COMMENTS, 
    getCommentsAction 
} from '../redusers/productsReduser';
import { getProductsAPI, getCommentsAPI, postCommentAPI } from '../../api';
import { loaderHide, loaderShow } from '../redusers/loaderReduser';

export function* workerSagaGETProducts() { 
    const product = yield call(getProductsAPI);
    yield put(getProductsAction(product));
};

export function* workerSagaGETComments(action) {
    yield put(loaderHide());
    const comment = yield call(getCommentsAPI, action.payload);
    yield put(getCommentsAction(comment));
    yield put(loaderShow());
};

export function* workerSagaPOSTComments(action) {
    yield call(postCommentAPI, action.payload);
    yield put(postCommentAction(action.payload));
};

export function* watchSaga() {
    yield takeLeading(LOAD_PRODUCT, workerSagaGETProducts);
    yield takeLeading(LOAD_COMMENTS, workerSagaGETComments);
    yield takeLeading(FORM_COMMENTS, workerSagaPOSTComments);
};

export default function* rootSaga() {
    yield watchSaga();
};
