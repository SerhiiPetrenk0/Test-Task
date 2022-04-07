import { combineReducers } from 'redux';
import { productsReduser } from './productsReduser';
import { loaderReduser } from './loaderReduser';
import { userInfoReduser } from './userInfoReduser';

export const rootReduser = combineReducers({
    product: productsReduser,
    loader: loaderReduser,
    userInfo: userInfoReduser
});
