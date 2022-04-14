// Actions
export const LOADER_HIDE:string = 'loaderDuck/LOADER_HIDE';
export const LOADER_SHOW:string = 'loaderDuck/LOADER_SHOW';

const initialStore = {
    status: false
};
// Reducer
export function loaderReducers(state = initialStore, action: { type: any; }) {
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
