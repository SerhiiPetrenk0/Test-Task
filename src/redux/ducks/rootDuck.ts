import { combineReducers } from 'redux';

import { productsReducers } from './productsDuck';
import { loaderReducers } from './loaderDuck';
import { userInfoReducers } from './userInfoDuck';

export const rootReducers = combineReducers({
    product: productsReducers,
    loader: loaderReducers,
    userInfo: userInfoReducers
});
