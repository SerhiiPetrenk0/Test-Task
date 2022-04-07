import { call, put, takeLeading } from 'redux-saga/effects';
import { 
    getProductsAction, 
    LOAD_PRODUCT, 
    LOAD_COMMENTS, 
    postCommentAction, 
    FORM_COMMENTS, 
    getCommentsAction
} from '../redusers/productsReduser';
import { getProductsAPI, getCommentsAPI, postCommentAPI, postUserInfoAPI } from '../../api';
import { loaderHide, loaderShow } from '../redusers/loaderReduser';
import { FILL_USER, postUserInfoAction } from '../redusers/userInfoReduser';
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
export function* workerSagaFillUser(action) {
    yield call(postUserInfoAPI, action.payload);
    yield put(postUserInfoAction(action.payload));
};

export function* watchSaga() {
    yield takeLeading(LOAD_PRODUCT, workerSagaGETProducts);
    yield takeLeading(LOAD_COMMENTS, workerSagaGETComments);
    yield takeLeading(FORM_COMMENTS, workerSagaPOSTComments);
    yield takeLeading(FILL_USER, workerSagaFillUser);
};

export default function* rootSaga() {
    yield watchSaga();
};
