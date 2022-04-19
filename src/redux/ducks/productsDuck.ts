import { call, put } from 'redux-saga/effects';

import { getProductsAPI, getCommentsAPI, postCommentAPI } from '../../api';
import { TypePostForm, TypeProduct, TypeComment } from '../../interface';
import { loaderHide, loaderShow } from './loaderDuck';

// Actions
export const GET_PRODUCTS: string = 'productsDuck/GET_PRODUCTS';
export const LOAD_PRODUCT: string = 'productsDuck/LOAD_PRODUCT';

export const GET_COMMENTS: string = 'productsDuck/GET_COMMENTS';
export const LOAD_COMMENTS: string = 'productsDuck/LOAD_COMMENTS';

export const FORM_COMMENTS: string = 'productsDuck/FORM_COMMENTS';
export const POST_COMMENTS: string = 'productsDuck/POST_COMMENTS';

const initialStore: IInitialStore = {
    products: [],
    comments: {
        asin: '',
        body: [{    
            rating: '',
            comments: ''
        }]
    }
};

// Reducer
export const productsReducers = (state = initialStore, action: IProductsReducers) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            const copyProduct = Object.assign([], action.payload);
            return {
                ...state,
                products: copyProduct
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
            const copyComments: TypeComment | any = Object.assign({}, state.comments);
            copyComments.body.push(action.payload);
            return {
                ...state,
                comments: copyComments
            };
        }
        default:
            return state;
    }
}

// Action Creators
export const getProductsAction = (data: TypeProduct[]): IGetProductsAction => ({
    type: GET_PRODUCTS,
    payload: data
});

export const getCommentsAction = (data: TypeComment): IGetCommentsAction => ({
    type: GET_COMMENTS,
    payload: data
});

export const postCommentAction = (data: TypePostForm): IPostCommentAction => ({
    type: POST_COMMENTS,
    payload: data
});

export const loadProduct = (): ILoadProduct => ({
    type: LOAD_PRODUCT
});

export const loadComment = (data: string | undefined): ILoadComment => ({
    type: LOAD_COMMENTS,
    payload: data
});

export const formComment = (data: TypePostForm): IFormComment => ({
    type: FORM_COMMENTS,
    payload: data
});

// Saga Worker
export function* workerSagaGETProducts() { 
    const product: TypeProduct[] = yield call(getProductsAPI);
    yield put(getProductsAction(product));
}

export function* workerSagaGETComments(action: IWorkerSagaGETComments) {
    yield put(loaderShow());
    const comment: TypeComment = yield call(getCommentsAPI, action.payload);
    yield put(getCommentsAction(comment));
    yield put(loaderHide());
}

export function* workerSagaPOSTComments(action: IWorkerSagaPOSTComments) {
    yield call(postCommentAPI, action.payload);
    yield put(postCommentAction(action.payload));
}

// Interface
interface IGetProductsAction {
    type: typeof GET_PRODUCTS,
    payload: TypeProduct[]
}

interface IGetCommentsAction {
    type: typeof GET_COMMENTS,
    payload: TypeComment
}

interface IPostCommentAction {
    type: typeof POST_COMMENTS,
    payload: TypePostForm
}

interface ILoadProduct {
    type: typeof LOAD_PRODUCT
}

interface ILoadComment {
    type: typeof LOAD_COMMENTS,
    payload: string | undefined
}

interface IFormComment {
    type: typeof FORM_COMMENTS,
    payload: TypePostForm
}

interface IWorkerSagaGETComments {
    payload: string,
    type: string
}

interface IWorkerSagaPOSTComments {
    payload: TypePostForm,
    type: string
}

interface IProductsReducers {
    payload: TypeProduct[] | TypeComment  | TypePostForm ,
    type: string
}

interface IInitialStore {
    products: (TypeProduct | never)[],
    comments: TypeComment
}
