export const GET_PRODUCTS = 'productsReduser/GET_PRODUCTS';
export const LOAD_PRODUCT = 'productsReduser/LOAD_PRODUCT';

const initialStore = {
    products: [],
};

export function productsReduser(state = initialStore, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                products: [
                    ...action.payload
                ]
            };
        }
        default:
            return state;
    };
};

export const getProductsAction = data => {
    return {
        type: GET_PRODUCTS,
        payload: data
    };
};

export const loadProduct = () => {
    return {
        type: LOAD_PRODUCT
    };
};
