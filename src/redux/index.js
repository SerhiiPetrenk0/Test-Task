import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootReduser } from './redusers/rootReduser';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReduser,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
