import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { productsReduser } from './redusers/productsReduser';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    productsReduser,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
