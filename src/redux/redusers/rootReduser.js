import { combineReducers } from 'redux';
import { productsReduser } from './productsReduser';
import { loaderReduser } from './loaderReduser';

export const rootReduser = combineReducers({
    product: productsReduser,
    loader: loaderReduser
});
