import { call, put } from 'redux-saga/effects';
import { getProductsAPI, getCommentsAPI, postCommentAPI } from '../../api';
import {loaderHide, loaderShow} from './loaderDuck';

// Actions
export const GET_PRODUCTS = 'productsReducers/GET_PRODUCTS';
export const LOAD_PRODUCT = 'productsReducers/LOAD_PRODUCT';

export const GET_COMMENTS = 'productsReducers/GET_COMMENTS';
export const LOAD_COMMENTS = 'productsReducers/LOAD_COMMENTS';

export const FORM_COMMENTS = 'productsReducers/FORM_COMMENTS';
export const POST_COMMENTS = 'productsReducers/POST_COMMENTS';

const initialStore = {
    products: [],
    comments: []
};

// Reducer
export const productsReducers = (state = initialStore, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                products: [
                    ...action.payload
                ]
            };
        }
        case GET_COMMENTS: {
            const copyComments = Object.assign({}, action.payload);
            return {
                ...state,
                comments: copyComments
            };
        }
        case POST_COMMENTS: {
            const copyComments = Object.assign([], state.comments);
            copyComments.body.push(action.payload);
            return {
                ...state,
                comments: copyComments
            };
        }

        default:
            return state;
    };
};

// Action Creators
export const getProductsAction = data => {
    return {
        type: GET_PRODUCTS,
        payload: data
    };
};
export const getCommentsAction = data => {
    return {
        type: GET_COMMENTS,
        payload: data
    };
};
export const postCommentAction = data => {
    return {
        type: POST_COMMENTS,
        payload: data
    }; 
};
export const loadProduct = () => {
    return {
        type: LOAD_PRODUCT
    };
};
export const loadComment = data => {
    return {
        type: LOAD_COMMENTS,
        payload: data
    };
};
export const formComment = data => {
    return {
        type: FORM_COMMENTS,
        payload: data
    };
};

// Saga Worker
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