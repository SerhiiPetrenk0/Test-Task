import { call, put } from 'redux-saga/effects';
import { getProductsAPI, getCommentsAPI, postCommentAPI } from '../../api';
import { TypePostForm } from '../../interface';
import {loaderHide, loaderShow} from './loaderDuck';

// Actions
export const GET_PRODUCTS:string = 'productsDuck/GET_PRODUCTS';
export const LOAD_PRODUCT:string = 'productsDuck/LOAD_PRODUCT';

export const GET_COMMENTS:string = 'productsDuck/GET_COMMENTS';
export const LOAD_COMMENTS:string = 'productsDuck/LOAD_COMMENTS';

export const FORM_COMMENTS:string = 'productsDuck/FORM_COMMENTS';
export const POST_COMMENTS:string = 'productsDuck/POST_COMMENTS';

const initialStore = {
    products: [],
    comments: []
};

// Reducer
export const productsReducers = (state = initialStore, action: { type: any; payload: any; }) => {
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
            const copyComments: any = Object.assign([], state.comments);
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
export const getProductsAction = (data: any) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    };
};

export const getCommentsAction = (data: any) => {
    return {
        type: GET_COMMENTS,
        payload: data
    };
};

export const postCommentAction = (data: any) => {
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

export const loadComment = (data: string | undefined) => {
    return {
        type: LOAD_COMMENTS,
        payload: data
    };
};

export const formComment = (data: TypePostForm) => {
    return {
        type: FORM_COMMENTS,
        payload: data
    };
};

// Saga Worker
export function* workerSagaGETProducts() { 
    const product:ResponseGenerator = yield call(getProductsAPI);
    yield put(getProductsAction(product));
}

export function* workerSagaGETComments(action: { payload: any, type: any; }) {
    yield put(loaderHide());
    const comment:ResponseGenerator = yield call(getCommentsAPI, action.payload);
    yield put(getCommentsAction(comment));
    yield put(loaderShow());
}

export function* workerSagaPOSTComments(action: { payload: any, type: any; }) {
    yield call(postCommentAPI, action.payload);
    yield put(postCommentAction(action.payload));
}

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}