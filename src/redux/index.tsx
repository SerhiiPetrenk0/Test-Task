import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducers } from './ducks/rootDuck';
import rootSaga from './watchSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
