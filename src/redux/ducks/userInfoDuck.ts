import { call, put } from 'redux-saga/effects';

import { postUserInfoAPI } from '../../api';
import { TypeUserinfo } from '../../interface';

// Actions
export const FILL_USER: string = 'userInfoDuck/FILL_USER';
export const POST_USER: string = 'userInfoDuck/POST_USER';

const initialStore: {userInfo: TypeUserinfo | {}} = {
    userInfo: {}
};

// Reducer
export function userInfoReducers(state = initialStore, action: IUserInfoReducers) {
    switch (action.type) {
        case FILL_USER: {
            const copyUserInfo: TypeUserinfo = Object.assign({}, action.payload);
            return {
                ...state,
                userInfo: copyUserInfo
            };
        }
        default:
            return state;
    }
}

// Action Creators
export const fillUser = (data: TypeUserinfo): IFillUser => ({
    type: FILL_USER,
    payload: data
});

export const postUserInfoAction = (data: TypeUserinfo): IPostUserInfoAction => ({
    type: typeof POST_USER,
    payload: data
});

// Saga Worker
export function* workerSagaFillUser(action: IWorkerSagaFillUser) {
    yield call(postUserInfoAPI, action.payload);
    yield put(postUserInfoAction(action.payload));
}

// Interface
interface IUserInfoReducers {
    type: string,
    payload: TypeUserinfo
}

interface IFillUser {
    type: typeof FILL_USER,
    payload: TypeUserinfo  
}

interface IPostUserInfoAction {
    type: typeof POST_USER,
    payload: TypeUserinfo  
}

interface IWorkerSagaFillUser {
    payload: TypeUserinfo, 
    type: string 
}
