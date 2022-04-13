// Actions
export const LOADER_HIDE = 'loaderReducers/LOADER_HIDE';
export const LOADER_SHOW = 'loaderReducers/LOADER_SHOW';

const initialStore = {
    status: false
};
// Reducer
export function loaderReducers(state = initialStore, action) {
    switch (action.type) {
        case LOADER_HIDE: {
            return {
                ...state,
                status: false
            };
        }
        case LOADER_SHOW: {
            return {
                ...state,
                status: true
            };
        }
        default:
            return state;
    };
};

// Action Creators
export const loaderHide = () => {
    return {
        type: LOADER_HIDE
    };
};

export const loaderShow = () => {
    return {
        type: LOADER_SHOW
    };
};
