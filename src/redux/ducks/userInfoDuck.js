import { call, put } from 'redux-saga/effects';
import { postUserInfoAPI } from '../../api';

// Actions
export const FILL_USER = 'userInfoDuck/FILL_USER';
export const POST_USER = 'userInfoDuck/POST_USER';

const initialStore = {
    userInfo: {}
};

// Reducer
export function userInfoReducers(state = initialStore, action) {
    switch (action.type) {
        case FILL_USER: {
            const copyUserInfo = Object.assign({}, action.payload);
            return {
                ...state,
                userInfo: copyUserInfo
            };
        }
        default:
            return state;
    };
};

// Action Creators
export const fillUser = data => {
    return {
        type: FILL_USER,
        payload: data
    };
};

export const postUserInfoAction = data => {
    return {
        type: POST_USER,
        payload: data
    };
};

// Saga Worker
export function* workerSagaFillUser(action) {
    yield call(postUserInfoAPI, action.payload);
    yield put(postUserInfoAction(action.payload));
}
