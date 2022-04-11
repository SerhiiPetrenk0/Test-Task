export const GET_PRODUCTS = 'productsReduser/GET_PRODUCTS';
export const LOAD_PRODUCT = 'productsReduser/LOAD_PRODUCT';

export const GET_COMMENTS = 'productsReduser/GET_COMMENTS';
export const LOAD_COMMENTS = 'productsReduser/LOAD_COMMENTS';

export const FORM_COMMENTS = 'productsReduser/FORM_COMMENTS';
export const POST_COMMENTS = 'productsReduser/POST_COMMENTS';

const initialStore = {
    products: [],
    comments: []
};

export const productsReduser = (state = initialStore, action) => {
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
            const copyComments = Object.assign({}, action.payload);
            return {
                ...state,
                comments: copyComments
            };
        }
        case POST_COMMENTS: {
            const copyComments = Object.assign([], state.comments);
            copyComments.body.push(action.payload);
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
export const postCommentAction = data => {
    return {
        type: POST_COMMENTS,
        payload: data
    }; 
};
export const loadProduct = () => {
    return {
        type: LOAD_PRODUCT
    };
};
export const loadComment = data => {
    return {
        type: LOAD_COMMENTS,
        payload: data
    };
};
export const formComment = data => {
    return {
        type: FORM_COMMENTS,
        payload: data
    };
};
