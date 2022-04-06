export const GET_PRODUCTS = 'productsReduser/GET_PRODUCTS';
export const LOAD_PRODUCT = 'productsReduser/LOAD_PRODUCT';
export const GET_COMMENTS = 'productsReduser/GET_COMMENTS';

const initialStore = {
    products: [],
    comments: []
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
        case GET_COMMENTS: {
            const copyComments = Object.assign({}, action.payload)
            return {
                ...state,
                comments: copyComments
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
export const getCommentsAction = data => {
    return {
        type: GET_COMMENTS,
        payload: data
    };
};
export const loadProduct = () => {
    return {
        type: LOAD_PRODUCT
    };
};
export const testAction = data => {
    return {
        type: "GET_COMME",
        payload: data
    };
};
